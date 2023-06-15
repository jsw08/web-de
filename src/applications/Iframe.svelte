<script lang="ts">
    import { onMount } from 'svelte';
    import { type Application } from '../stores';
    import AppFrame from '../components/AppFrame.svelte';
    export let thisApplication: Application

    let title: string = "";
    let iframe: HTMLIFrameElement | {contentDocument: {title: string}};

    onMount(() => {
        iframe.contentDocument.addEventListener("", e => {})
    })
</script>
<AppFrame {thisApplication} {title}>
    <iframe bind:this={iframe} class="w-full h-full" src="//textarea.online" frameborder="0" {title}/>
</AppFrame>
