<script>
  const socials = {
    'github': 'https://github.com/amamparo',
    'goodreads': 'https://www.goodreads.com/user/show/104803730-aaron-mamparo',
    'instagram': 'https://www.instagram.com/aaronmamparo/',
    'last.fm': 'https://www.last.fm/user/amamparo',
    'linkedin': 'https://www.linkedin.com/in/aaronmamparo/',
    'mastodon': 'https://mstdn.social/@aaronmamparo',
    'soundcloud': 'https://soundcloud.com/aaronmamparo'
  }
</script>

Find me:
<ul>
    {#each Object.entries(socials) as [title, url]}
        <li><a href={url}>{title}</a></li>
    {/each}
</ul>

<style>
    li {
        margin-bottom: .5rem;
    }
</style>
