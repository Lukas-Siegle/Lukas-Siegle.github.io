<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/ui/navigation/Navbar.svelte';
	import { Toaster } from "$lib/components/ui/sonner";
	import Analytics from '$lib/components/Analytics.svelte'
	import Toggle from '$lib/components/ui/navigation/Toggle.svelte';
	import { ModeWatcher } from 'mode-watcher';
	let { children } = $props()
</script>


<!-- <GraphBackground /> -->
 <Navbar/>
<ModeWatcher />
<div class="container mx-auto xl:px-24 py-8">
	{@render children()}
</div>
<Toggle/>
<Toaster/>
<Analytics/>
