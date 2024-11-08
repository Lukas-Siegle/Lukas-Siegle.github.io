<script lang="ts">
	import Preview from '$lib/components/ui/blog/Preview.svelte';
	import * as Card from '$lib/components/ui/card';

	let { data } = $props()

</script>
<div class="flex gap-2">
    <h1 class="mb-8 text-4xl font-bold tracking-tight">Blog</h1>
</div>


<div class="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-1">
	{#each data.posts as post}
		<Preview {post}/>
	{/each}
</div>