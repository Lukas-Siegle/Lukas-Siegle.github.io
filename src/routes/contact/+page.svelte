<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Card } from '$lib/components/ui/card';

	let formData = {
		name: '',
		email: '',
		subject: '',
		message: ''
	};

	const handleSubmit = async () => {
		console.log(formData);
	};
</script>

<div class="min-h-screen bg-background">
	<main class="container mx-auto px-4 py-16">
		<div class="mx-auto max-w-2xl space-y-8">
			<div class="space-y-4 text-center">
				<h1 class="text-4xl font-bold tracking-tight text-foreground">Contact Me</h1>
				<p class="text-xl text-muted-foreground">
					Got questions?
				</p>
				<p class="text-lg text-muted-foreground">
					 Send me a message, and I’ll get back to you as soon as possible.
				</p>
			</div>

			<div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
				<Card class="bg-card p-6 text-card-foreground">
					<div class="space-y-2">
						<h3 class="text-lg font-semibold">Email</h3>
						<p class="text-muted-foreground">lukas@siegle.app</p>
					</div>
				</Card>
				<Card class="bg-card p-6 text-card-foreground">
					<div class="space-y-2">
						<h3 class="text-lg font-semibold">LinkedIn</h3>
						<!-- svelte-ignore a11y_consider_explicit_label -->
						<p class="text-muted-foreground"><a  href="https://www.linkedin.com/in/lukas-siegle-57628b290/" >Message me</a></p>
				</Card>
			</div>
			<!-- <Card class="bg-card p-6 text-card-foreground">
				<form on:submit|preventDefault={handleSubmit} class="space-y-6">
					<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
						<div class="space-y-2">
							<label for="name" class="text-sm font-medium text-foreground">Name</label>
							<Input
								id="name"
								type="text"
								bind:value={formData.name}
								class="w-full"
								placeholder="Your name"
							/>
						</div>
						<div class="space-y-2">
							<label for="email" class="text-sm font-medium text-foreground">Email</label>
							<Input
								id="email"
								type="email"
								bind:value={formData.email}
								class="w-full"
								placeholder="your@email.com"
							/>
						</div>
					</div>

					<div class="space-y-2">
						<label for="subject" class="text-sm font-medium text-foreground">Subject</label>
						<Input
							id="subject"
							type="text"
							bind:value={formData.subject}
							class="w-full"
							placeholder=""
						/>
					</div>

					<div class="space-y-2">
						<label for="message" class="text-sm font-medium text-foreground">Message</label>
						<Textarea
							id="message"
							bind:value={formData.message}
							class="min-h-[150px] w-full"
							placeholder="Tell me more about your inquiry..."
						/>
					</div>

					<Button type="submit" class="w-full">Send Message</Button>
				</form>
			</Card> -->
		</div>
	</main>
</div>
