<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import Navbar from '$lib/components/ui/navigation/Navbar.svelte';
	import { Toaster } from "$lib/components/ui/sonner";
	import Analytics from '$lib/components/Analytics.svelte'
	import Toggle from '$lib/components/ui/navigation/Toggle.svelte';
	let { children } = $props()
</script>

<ModeWatcher />
<Navbar />
<!-- <GraphBackground /> -->
<div class="container mx-auto xl:px-24 py-8">
	{@render children()}
</div>

<Toggle/>
<Toaster/>
<Analytics/>