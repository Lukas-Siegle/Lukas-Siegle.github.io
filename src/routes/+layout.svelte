<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import Header from '$lib/components/ui/nav/Header.svelte';
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Github } from 'lucide-svelte';

</script>

<ModeWatcher />
<Header />
<!-- <GraphBackground /> -->
<div class="container mx-auto xl:px-24  py-8">
	<slot />
</div>

<div class="flex flex-col gap-2 fixed top-2 right-2 z-20">
	<Button on:click={toggleMode} variant="outline" size="icon">
		<Sun
			class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
		/>
		<Moon
			class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
		/>
		<span class="sr-only">Toggle theme</span>
	</Button>
	<a href="https://github.com/Lukas-Siegle/Personal-Website">
		<Button variant="outline" size="icon">
			<Github/>
		</Button>
	</a>	
</div>

