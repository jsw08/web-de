<script lang="ts">
    import { type Application } from '../stores';
    import AppFrame from '../components/AppFrame.svelte';
    
    export let thisApplication: Application
</script>
<AppFrame {thisApplication} title="Example">
    <iframe class="w-full h-full" src="//textarea.online" on:click frameborder="0">
    </iframe>
</AppFrame>
