<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Profile from '$lib/components/ui/profile/Profile.svelte';
	import Education from '$lib/components/ui/profile/Education.svelte';
	import Experience from '$lib/components/ui/profile/Experience.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import Preview from '$lib/components/ui/blog/Preview.svelte';

	// let { data } = $props();
	// const post = data.post;

</script>

<div class="flex flex-col gap-8">
	<Profile />

	<div class="flex flex-col gap-4 lg:flex-row">
		<Education />
		<Experience />
	</div>
	<!-- <Card.Root>
		<Card.Header>
			<Card.Title>
				<p class="text-2xl">Featured Blogs:</p>
			</Card.Title>
		</Card.Header>
		<Card.Content>
			<div class="flex flex-col gap-2">
				<Preview {post} />
				<Preview {post} />
			</div>
		</Card.Content>
	</Card.Root> -->
</div>
