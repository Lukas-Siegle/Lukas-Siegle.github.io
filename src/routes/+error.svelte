<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/button/button.svelte';
    import Pulse from '$lib/components/ui/loaders/Pulse.svelte';
</script>

<div class="flex flex-col w-full h-svh items-center justify-center">
	<h1 class="text-3xl mb-6">Oops! That didn’t work...</h1>
	<Button on:click={() => goto('/')}>Go back Home</Button>
    <div class="mt-10">
        <Pulse/>
    </div>
</div>
