<script>
	import Button from '../button/button.svelte';
	import { toast } from 'svelte-sonner';
	import { Copy } from 'lucide-svelte';

	export let content = '';
	export let style = '';

	async function copyToClipboard() {
		try {
			await navigator.clipboard.writeText(content);
			toast('Copied to Clipboard!');
		} catch (error) {
			toast('Copy failed');
		}
	}
</script>

<Button
	on:click={copyToClipboard}
	variant="ghost"
	size="icon"
	class={`${style} transition-colors hover:bg-white/25`}
>
	<Copy color="yellow" size=18/>
</Button>
