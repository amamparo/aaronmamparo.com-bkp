<script>
  export let url
  export let hex
  export let svg
</script>

<div class="text-center items-center cursor-pointer">
    <a href={url} target="_blank" rel="noopener noreferrer me">
        <div class="w-[30px] h-[30px] hover:scale-[1.15] duration-300 ease-in-out"
             style="fill: #{hex}">
            {@html svg}
        </div>
    </a>
</div>
