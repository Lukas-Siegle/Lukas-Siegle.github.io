<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import * as Dialog from '$lib/components/ui/dialog';
	import TermsAndConditions from '$lib/components/ui/terms/TermsAndConditions.svelte';
	import { toast } from 'svelte-sonner';
	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		warnings: { duplicateId: false }, 
		validators: zodClient(formSchema),
		onResult(event) {
			console.log(event.result);
			if (event.result.status == 200) {
				toast('Message sent!');
			} else {
				toast('Error sending message.');
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<Card.Root class="mx-auto w-full max-w-2xl">
	<Card.Content>
		<form method="POST" use:enhance class="space-y-6 ">
			<!-- <div class="grid grid-cols-1 gap-4 sm:grid-cols-2"> -->
				<Form.Field {form} name="name">
					<Form.Control let:attrs>
						<Form.Label class="text-lg">Name</Form.Label>
						<Input {...attrs} bind:value={$formData.name} placeholder="Your name" />
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
				<Form.Field {form} name="email">
					<Form.Control let:attrs>
						<Form.Label class="text-lg">Email</Form.Label>
						<Input
							{...attrs}
							type="email"
							bind:value={$formData.email}
							placeholder="mail@example.com"
						/>
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
			<!-- </div> -->
			<Form.Field {form} name="subject">
				<Form.Control let:attrs>
					<Form.Label class="text-lg">Subject</Form.Label>
					<Input
						{...attrs}
						bind:value={$formData.subject}
						placeholder="Enter the subject of your message"
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="message">
				<Form.Control let:attrs>
					<Form.Label class="text-lg">Message</Form.Label>
					<Textarea
						{...attrs}
						bind:value={$formData.message}
						placeholder="Enter your message here"
						class="min-h-[120px]"
					/>
				</Form.Control>
				<Form.FieldErrors />
				By clicking Submit you accept the <TermsAndConditions />
			</Form.Field>
			<Form.Button>Submit</Form.Button>
		</form>
	</Card.Content>
</Card.Root>
<!-- <SuperDebug data={formData}></SuperDebug> -->
