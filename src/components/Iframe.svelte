<script lang="ts">
    import AppFrame from '../components/AppFrame.svelte';
    export let appId: string;
    export let title: string;
    export let url: string;

    let inFrame: boolean = false;

    import { onMount } from 'svelte';

    let pageContent = 'cock';
    fetch(url).then(v => v.text()).then(v => alert(v)).catch(v => alert(v))
</script>
<AppFrame {appId} {title}>
    <!-- <iframe class="w-full" src={url} frameborder="0" title="{inFrame ? "f":""} {title}" on:pointerleave={() => inFrame=false} on:pointerenter={() => inFrame=true} /> -->
    <div>{@html pageContent}</div>
</AppFrame>
