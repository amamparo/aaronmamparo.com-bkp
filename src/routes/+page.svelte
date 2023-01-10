<script>
  import {JsonView} from '@zerodevx/svelte-json-view'

  const json = {
    name: 'Aaron Mamparo',
    location: 'Chicago, IL',
    social: {
      'linkedin': 'https://www.linkedin.com/in/aaronmamparo/'
    }
  }
</script>

<JsonView {json}/>
