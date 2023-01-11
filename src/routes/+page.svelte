<script>
  import './tailwind.css'
  import Footer from '../components/Footer.svelte'
  import Headshot from '../components/Headshot.svelte'
  import SocialIcons from '../components/SocialIcons.svelte'
</script>
<div class="flex flex-col justify-center items-center w-screen h-screen p-6">
    <div class="flex flex-col justify-center align-center w-full lg:w-1/2 md:w-1/3 h-[80%] lg:h-1/2 md:h-1/2 items-center">
        <div class="w-full h-full flex flex-col justify-center items-center">
            <Headshot/>
            <h1 class="text-center text-xl font-[600] mt-3">Aaron Mamparo</h1>
            <SocialIcons/>
        </div>
    </div>
    <Footer/>
</div>
