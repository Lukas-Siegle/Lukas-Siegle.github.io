<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Sun, Moon, Cookie } from 'lucide-svelte';
	import { toggleMode } from 'mode-watcher';
	import * as Dialog from '$lib/components/ui/dialog'
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
		  <Button variant="outline" size="icon">
			<Cookie />
			<span class="sr-only">Cookie Information</span>
		  </Button>
		</Dialog.Trigger>
		<Dialog.Content class="sm:max-w-[425px]">
		  <Dialog.Header>
			<Dialog.Title>Cookie Information</Dialog.Title>
			<Dialog.Description>
			  Information about our use of cookies and analytics.
			</Dialog.Description>
		  </Dialog.Header>
		  <div class="grid gap-4 py-4">
			<p class="text-sm text-muted-foreground">
			  We don't use cookies on this page, but please note that analytic data may be collected to help us improve the site experience.
			</p>
			<p class="text-sm text-muted-foreground">
			  This data is anonymized and used solely for the purpose of enhancing our services and user interface.
			</p>
		  </div>
		  <Dialog.Footer>
			<Dialog.Close>
			  ok
			</Dialog.Close>
		  </Dialog.Footer>
		</Dialog.Content>
	  </Dialog.Root>
</div>
