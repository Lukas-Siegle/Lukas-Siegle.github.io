<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Sun, Moon, Info } from 'lucide-svelte';
	import { toggleMode } from 'mode-watcher';
	import * as Dialog from '$lib/components/ui/dialog';
</script>
<div class="fixed right-2 top-2 z-20 flex flex-col gap-2">
	<Button on:click={toggleMode} variant="outline" size="icon">
		<Sun
			class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
		/>
		<Moon
			class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
		/> <span class="sr-only">Toggle theme</span>
	</Button>
	<Dialog.Root>
		<Dialog.Trigger>
			<div
				class="inline-flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
			>
				<Info />
				<span class="sr-only">Information</span>
			</div>
		</Dialog.Trigger>
		<Dialog.Content>
			<Dialog.Header>
				<Dialog.Title>Information</Dialog.Title>
				<Dialog.Description>About this Site.</Dialog.Description>
			</Dialog.Header>
			<div class="grid gap-4 py-4">
				<ul class="list-disc space-y-2 pl-5 text-foreground">
					<li>
						We don't use cookies on this page, but please note that analytic data may be collected
						to help us improve the site experience.
					</li>
					<li>
						This data is anonymized and used solely for the purpose of enhancing our services and
						user interface.
					</li>
				</ul>
				<p>
					Please be aware that this website is intended solely for private, non-commercial use;
					therefore, no imprint is required.
				</p>
			</div>
			<Dialog.Footer>
				<Dialog.Close>ok</Dialog.Close>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
</div>
