<script type="ts">
  import {openApps} from './stores';
  import Example from './applications/Example.svelte';
</script>

{#each $openApps as app (app.id)}
  <svelte:component this={app.element} thisApplication={app}/>
{/each}
