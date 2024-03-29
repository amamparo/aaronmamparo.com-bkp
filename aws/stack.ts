import {App, CfnOutput, Stack} from 'aws-cdk-lib';
import {BlockPublicAccess, Bucket} from 'aws-cdk-lib/aws-s3';
import {Distribution, OriginAccessIdentity, ViewerProtocolPolicy} from "aws-cdk-lib/aws-cloudfront";
import {Certificate, CertificateValidation} from "aws-cdk-lib/aws-certificatemanager";
import {ARecord, CnameRecord, HostedZone, RecordTarget} from "aws-cdk-lib/aws-route53";
import {S3Origin} from "aws-cdk-lib/aws-cloudfront-origins";
import {CloudFrontTarget} from "aws-cdk-lib/aws-route53-targets";

const domainName = process.env.DOMAIN_NAME as string
const wwwDomainName = `www.${domainName}`

class MyStack extends Stack {
    constructor(scope: App) {
        super(scope, process.env.STACK_NAME, {
            env: {
                region: process.env.CDK_DEFAULT_REGION,
                account: process.env.CDK_DEFAULT_ACCOUNT
            }
        });

        const bucket = new Bucket(this, 'Bucket', {
            bucketName: domainName,
            blockPublicAccess: BlockPublicAccess.BLOCK_ALL
        });

        const originAccessIdentity = new OriginAccessIdentity(this, 'OAI');
        bucket.grantRead(originAccessIdentity);

        const hostedZone = HostedZone.fromLookup(this, 'HostedZone', {domainName});

        const certificate = new Certificate(this, 'Certificate', {
            domainName,
            validation: CertificateValidation.fromDns(hostedZone),
            subjectAlternativeNames: [`*.${domainName}`]
        });

        const distribution = new Distribution(this, 'Distribution', {
            defaultBehavior: {
                origin: new S3Origin(bucket, {originAccessIdentity}),
                compress: true,
                viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS
            },
            defaultRootObject: 'index.html',
            domainNames: [domainName, wwwDomainName],
            certificate
        });

        new ARecord(this, 'AliasRecord', {
            zone: hostedZone,
            recordName: domainName,
            target: RecordTarget.fromAlias(new CloudFrontTarget(distribution))
        });

        new CnameRecord(this, 'WwwRecord', {
            zone: hostedZone,
            recordName: wwwDomainName,
            domainName
        })

        new CfnOutput(this, 'DistributionId', {
            value: distribution.distributionId
        });
    }
}

new MyStack(new App());
