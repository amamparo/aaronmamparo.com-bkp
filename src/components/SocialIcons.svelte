<script context="module">
  import {
    siDiscogs,
    siGithub,
    siGoodreads,
    siInstagram,
    siLastdotfm,
    siLinkedin,
    siSoundcloud,
    siSpotify
  } from 'simple-icons';
  import SocialIcon from './SocialIcon.svelte';

  const socials = [
    {
      url: 'https://www.linkedin.com/in/aaronmamparo/',
      icon: siLinkedin
    },
    {
      url: 'https://github.com/amamparo',
      icon: siGithub
    },
    {
      url: 'https://www.goodreads.com/user/show/104803730-aaron-mamparo',
      icon: siGoodreads
    },
    {
      url: 'https://www.instagram.com/aaronmamparo/',
      icon: siInstagram
    },
    {
      url: 'https://www.last.fm/user/amamparo',
      icon: siLastdotfm
    }
  ]
</script>

<div class="w-full mt-5 lg:mt-3 md:mt-3">
    <div class="flex flex-wrap w-full gap-5 justify-center items-top">
        {#each socials as {url, icon, title}}
            <SocialIcon {url} svg={icon.svg} hex={icon.hex}/>
        {/each}
    </div>
</div>
