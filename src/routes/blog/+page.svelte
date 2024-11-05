<script lang="ts">
	import * as Card from '$lib/components/ui/card';

	let { data } = $props()

</script>
<div class="flex gap-2">
    <h1 class="mb-8 text-4xl font-bold tracking-tight">Blog</h1>
</div>


<div class="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-1">
	{#each data.posts as post}
		<a href={`/blog/${post.slug}`} class="transition-transform duration-200 hover:-translate-y-1">
			<Card.Root class="h-full hover:shadow-lg transition-shadow duration-200">
				<Card.Header>
					<Card.Title>
						<div class="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-y-0">
							<p class="text-2xl font-semibold text-primary">
								{post.title}
							</p>
							<p class="text-sm text-muted-foreground whitespace-nowrap">
								{post.date}
							</p>
						</div>
					</Card.Title>
					<div class="mt-2 flex items-center gap-2">
						<p class="text-sm text-muted-foreground">{post.author}</p>
						<span class="text-muted-foreground">•</span>
						<div class="flex flex-wrap gap-2">
							{#each post.tags as tag}
								<span class="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">
									{tag}
								</span>
							{/each}
						</div>
					</div>
				</Card.Header>
				<Card.Content class="mt-2 prose-sm prose-neutral dark:prose-invert">
					{post.description}
				</Card.Content>
			</Card.Root>
		</a>
	{/each}
</div>