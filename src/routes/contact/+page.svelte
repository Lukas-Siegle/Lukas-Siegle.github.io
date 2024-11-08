<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import * as Card from '$lib/components/ui/card';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import ContactForm from './ContactForm.svelte';
	import type { PageData } from './$types.js';
	import { Content } from '$lib/components/ui/accordion';
	export let data: PageData;
</script>

<div class="bg-background">
	<main class="container mx-auto px-4 py-16">
		<div class="mx-auto max-w-2xl space-y-8">
			<div class="space-y-4 text-center">
				<h1 class="text-4xl font-bold tracking-tight text-foreground">Contact Me</h1>
				<Separator></Separator>
				<p class="text-xl text-muted-foreground">Got questions?</p>
				<p class="text-lg text-muted-foreground">
					Send me a message, and I’ll get back to you as soon as possible.
				</p>
			</div>

			<div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
				<Card.Root>
					<Card.Content>
						<div class="space-y-2">
							<h3 class="text-xl font-semibold">Email</h3>
							<a class="text-md text-muted-foreground" href="mailto:lukas@siegle.app"
								>lukas@siegle.app</a
							>
						</div>
					</Card.Content>
				</Card.Root>
				<Card.Root>
					<Card.Content>
						<div class="space-y-2">
							<h3 class="text-xl font-semibold">LinkedIn</h3>
							<!-- svelte-ignore a11y_consider_explicit_label -->
							<a
								class="text-md text-muted-foreground"
								href="https://www.linkedin.com/in/lukas-siegle-57628b290/">Message me</a
							>
						</div>
					</Card.Content>
				</Card.Root>
			</div>
			<div class="relative">
				<hr />
				<p
					class="absolute bg-background px-2"
					style="top: -12px; left: 50%; transform: translateX(-50%);"
				>
					or
				</p>
			</div>
			<ContactForm data={data.form}></ContactForm>
		</div>
	</main>
</div>
