<script lang="ts">
    export let title: string

    let x: number = 15;
    let y: number = 15;
    let cW: number;
    let cH: number;
    let moving: boolean = false;
    let maximized: boolean = false;
    $: mxWH = maximized ? "100%" : "";

    const mMove = (e: MouseEvent): void => {
        if (moving) {
            if (maximized) maximized = false;
            x = e.clientX - cW / 2;
            y = e.clientY - cH / 2;
        }
    };
</script>

<svelte:window
    on:mouseup={() => (moving = false)}
    on:mousemove={mMove}
/>

<div
    class="absolute fixed flex flex-col min-w-[3in] min-h-[3in] resize overflow-auto rounded-lg shadow-lg border-2 z-[10000]"
    style="left: {maximized ? 0 : x}px; top: {maximized ? 0 : y}px;"
    style:width={mxWH}
    style:height={mxWH}
>
    <div
        class="h-6 shadow-md flex flex-row border px-1 select-none"
        on:mousedown={() => (moving = true)}
        bind:clientWidth={cW}
        bind:clientHeight={cH}
        style:cursor={moving ? "grab" : "move"}
    >
        <span class="flex-grow">{title}</span>
        <div>
            <button class="" on:click={() => maximized = !maximized}>&#x1f5d6;</button>
            <button class="font-bold">&#x2715;</button> <!-- TODO: make closeable -->
        </div>
    </div>
    <div class="flex-grow bg-white">
        <slot/>
    </div>
</div>
