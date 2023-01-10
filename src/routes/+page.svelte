<script>
  import './globals.css'
  import {
    siGithub,
    siGoodreads,
    siInstagram,
    siLastdotfm,
    siLinkedin,
    siMastodon,
    siSoundcloud, siSpotify
  } from 'simple-icons';

  const socials = [
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
    },
    {
      url: 'https://www.linkedin.com/in/aaronmamparo/',
      icon: siLinkedin
    },
    {
      url: 'https://mstdn.social/@aaronmamparo',
      icon: siMastodon
    },
    {
      url: 'https://soundcloud.com/aaronmamparo',
      icon: siSoundcloud
    },
    {
      url: 'https://open.spotify.com/user/ddnbjtkco6k0krar7oikgoaua',
      icon: siSpotify
    }
  ]

</script>
<div class="flex flex-col justify-center items-center w-screen h-screen p-6">
    <div class="flex flex-col justify-center align-center w-full lg:w-1/2 md:w-1/3 h-[80%] lg:h-1/2 md:h-1/2 items-center">
        <div class="w-full h-full flex flex-col justify-center items-center">
            <img alt="me" title="me" src="/headshot.png" width="128" height="128"
                 class="shadow rounded-full max-w-full h-auto align-middle border-none"/>
            <h1 class="text-center text-xl font-[600] mt-3">Aaron Mamparo</h1>
            <div class="w-full h-1/4 mt-5 lg:mt-3 md:mt-3">
                <div class="flex flex-wrap w-full gap-5 justify-center items-top">
                    {#each socials as {url, icon, title}}
                        <div class="text-center items-center cursor-pointer">
                            <a href={url} target="_blank" rel="noopener noreferrer me">
                                <div class="w-[30px] h-[30px] hover:scale-[1.15]  duration-300 ease-in-out"
                                     style="fill: #{icon.hex}">
                                    {@html icon.svg}
                                </div>
                            </a>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
    <footer class="text-center text-sm fixed inset-x-0 bottom-4 text-gray-500">
        Copyright © {new Date().getFullYear()} Aaron Mamparo
        &nbsp;|&nbsp;
        <a class="text-gray-600 font-medium" href="mailto:aaronmamparo@gmail.com" target="_blank">Contact Me</a>
    </footer>
</div>
