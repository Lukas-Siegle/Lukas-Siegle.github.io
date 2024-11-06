<script lang="ts">
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import type { Technology } from '$lib/types';

	const images: any = import.meta.glob('$lib/assets/images/*.{png,jpg,jpeg,svg,webp}', {
		eager: true,
		// query: {
		// 	enhanced: true
		// }
	});

	function getImageUrl(path: string) {
		const key = Object.keys(images).find((key) => key.includes(path));
		return key ? images[key].default : '';
	}
	// function getImageModule(path: string) {
	// 	const key = Object.keys(images).find((key) => key.includes(path));
	// 	return key ? images[key].default : null;
	// }
	const technologies_current: Technology[] = [
		{
			name: 'Typescript',
			page: 'https://www.typescriptlang.org/',
			img: 'typescript.webp'
		},
		{
			name: 'Golang',
			page: 'https://go.dev/',
			img: 'go.png'
		},
		{
			name: 'Docker',
			page: 'https://www.docker.com/',
			img: 'docker.webp'
		},
		{
			name: 'Traefik',
			page: 'https://traefik.io/traefik/',
			img: 'traefik.png'
		},
		{
			name: 'Hashicorp Nomad',
			page: 'https://www.nomadproject.io/',
			img: 'nomad.png'
		},
		{
			name: 'Hashicorp Boundary',
			page: 'https://www.boundaryproject.io//',
			img: 'boundary.png'
		},
		{
			name: 'Hashicorp Vault',
			page: 'https://www.nomadproject.io/',
			img: 'vault.svg'
		},
		{
			name: 'Sveltekit',
			page: 'https://svelte.dev/',
			img: 'sveltekit.png'
		},
		{
			name: 'AWS',
			page: 'https://aws.amazon.com/de/',
			img: 'aws.png'
		},
		{
			name: 'Ionos',
			page: 'https://www.ionos.de/',
			img: 'ionos.svg'
		},
		{
			name: 'git',
			page: 'https://git-scm.com/',
			img: 'git.png'
		},
		{
			name: 'node',
			page: 'https://nodejs.org/en',
			img: 'node.png'
		},
		{
			name: 'tailwindcss',
			page: 'https://tailwindcss.com/',
			img: 'tailwind.png'
		},
		{
			name: 'Prometheus',
			page: 'https://prometheus.io/',
			img: 'prometheus.png'
		},
		{
			name: 'Grafana',
			page: 'https://grafana.com/',
			img: 'grafana.svg'
		},
		{
			name: 'PostgreSQL',
			page: 'https://www.postgresql.org/',
			img: 'postgresql.png'
		}
	];

	const technologies_past: Technology[] = [
		{
			name: 'Python',
			page: 'https://www.python.org/',
			img: 'python.png'
		},
		{
			name: 'Java',
			page: 'https://www.java.com/de/',
			img: 'java.png'
		},
		{
			name: 'Nginx',
			page: 'https://nginx.org/en/',
			img: 'nginx.png'
		},
		{
			name: 'Terraform',
			page: 'https://www.terraform.io/',
			img: 'terraform.png'
		},
		{
			name: 'fluentbit',
			page: 'https://fluentbit.io/',
			img: 'fluentbit.webp'
		},
		{
			name: 'Nmap',
			page: 'https://nmap.org/',
			img: 'nmap.png'
		},
		{
			name: 'SQLMap',
			page: 'https://sqlmap.org/',
			img: 'sqlmap.png'
		},
		{
			name: 'Zap',
			page: 'https://www.zaproxy.org/',
			img: 'zap.png'
		},
		{
			name: 'Burpsuite',
			page: 'https://portswigger.net/burp',
			img: 'burp.webp'
		}
	];
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
