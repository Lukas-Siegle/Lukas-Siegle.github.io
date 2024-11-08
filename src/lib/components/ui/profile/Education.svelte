<script lang="ts">
    import * as Card from '$lib/components/ui/card'
    import { education } from '$lib/data';
</script>
<Card.Root class="w-full shadow-lg">
    <Card.Header>
        <Card.Title>Education</Card.Title>
    </Card.Header>
    <Card.Content>
        <div class="relative pl-4">
            {#each education.reverse() as item}
                <div class="relative mb-8">
                    <div class="absolute left-0 top-0 h-full w-0.5 bg-gray-200"></div>
                    <div class="absolute -left-1.5 top-1.5 h-4 w-4 rounded-full bg-primary"></div>
                    <div class="ml-8">
                        <h3 class="text-text text-lg font-semibold">{item.name}</h3>
                        <p class="font-medium">{item.where}</p>
                        <div class="mt-1 text-sm">
                            {item.from} - {item.to}
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </Card.Content>
</Card.Root>