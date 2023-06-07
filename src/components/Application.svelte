<script lang="ts">
    let x: number = 15;
    let y: number = 15;
    let cW: number;
    let cH: number;
    let wW: number;
    let wH: number;
    let moving: boolean = false;
    let maximized: boolean = true;
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
    on:mouseup={(e) => (moving = false)}
    on:mousemove={mMove}
    bind:innerWidth={wW}
    bind:innerHeight={wH}
/>

<div
    class="fixed flex flex-col min-w-[3in] min-h-[3in] resize overflow-auto rounded-lg shadow-lg border-2"
    style="left: {maximized ? 0 : x}px; top: {maximized ? 0 : y}px;"
    style:width={mxWH}
    style:height={mxWH}
>
    <div
        class="h-6 shadow-md flex flex-row border"
        on:mousedown={(e) => (moving = true)}
        bind:clientWidth={cW}
        bind:clientHeight={cH}
        style:cursor={moving ? "grab" : "move"}
    >
        <span class="flex-grow">hi</span>
    </div>
    <div class="flex-grow bg-white">
        hi
        {cW}
        {cH}
    </div>
</div>
