<script lang="ts">
    import Iframe from '../components/Iframe.svelte';
    
    export let appId: string
</script>
<Iframe {appId} url="https://example.com" title="Example"/>
