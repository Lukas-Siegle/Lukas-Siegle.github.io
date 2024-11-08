<script lang="ts">
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { technologies_current, technologies_past } from '$lib/data';

	const images: any = import.meta.glob('$lib/assets/images/*.{png,jpg,jpeg,svg,webp}', {
		eager: true,
	});

	function getImageUrl(path: string) {
		const key = Object.keys(images).find((key) => key.includes(path));
		return key ? images[key].default : '';
	}

</script>

<ScrollArea class="rounded-md border bg-card">
	<div class="p-6">
		<h4 class="mb-6 text-xl font-semibold">
			Technologies I Regularly Use and Have Experience With
		</h4>
		<div class="grid grid-flow-row grid-cols-1 md:grid-cols-2">
			{#each technologies_current as technology}
				<div class="flex flex-col justify-center">
					<div
						class="mb-2 flex w-[95%] items-center space-x-4 rounded-lg bg-card p-3 transition-colors hover:bg-accent"
					>
						<img src={getImageUrl(technology.img)} alt={technology.name} class="h-8 w-8" />

						<a href={technology.page} class="text-md font-medium hover:underline"
							>{technology.name}</a
						>
					</div>
					<Separator class="mb-2 w-[95%]" />
				</div>
			{/each}
		</div>
	</div>

	<div class="p-6">
		<h4 class="mb-6 text-xl font-semibold">
			Tools and Technologies I've Used or Occasionally Utilize
		</h4>

		<div class="grid grid-flow-row grid-cols-1 md:grid-cols-2">
			{#each technologies_past as technology}
				<div class="flex flex-col justify-center">
					<div
						class="mb-2 flex w-[95%] items-center space-x-4 rounded-lg bg-card p-3 transition-colors hover:bg-accent"
					>
						<img src={getImageUrl(technology.img)} alt={technology.name} class="h-8 w-8" />

						<a href={technology.page} class="text-md font-medium hover:underline"
							>{technology.name}</a
						>
					</div>
					<Separator class="mb-2 w-[95%]" />
				</div>
			{/each}
		</div>
	</div>
</ScrollArea>
