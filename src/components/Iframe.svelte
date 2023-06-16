<script lang="ts">
    import AppFrame from '../components/AppFrame.svelte';
    import { openApps, type Application } from '../stores';
    export let appId: string;
    export let title: string;
    export let url: string;
</script>
<AppFrame {appId} {title}>
    <iframe class="w-full h-full" src={url} frameborder="0" title={title}/>
</AppFrame>
