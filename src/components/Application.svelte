<script lang="ts">
    let x: number = 15;
    let y: number = 15;
    let moving: boolean = false;

    function mMove (e: MouseEvent): void {if (moving) {
        x += e.movementX;
        y += e.movementY;
    }}

    function mDown (e: MouseEvent): void {

    }
</script>
<svelte:window on:mouseup={e => moving=false} on:mousemove={mMove}/> 

<div class="absolute left-[15px] top-[15px] min-w-[5cm] min-h-[5rem] resize overflow-auto  rounded-xl shadow-xl border-2 flex flex-col bg-neutral-100" style:left={x + "px"} style:top={y + "px"}>
    <div class="h-6 shadow-lg border-b-2 hover:cursor-move bg-white" on:mousedown={e => moving = true}>hi</div>
    <div class="flex-grow  rounded-md border bg-white">hi</div>

</div>