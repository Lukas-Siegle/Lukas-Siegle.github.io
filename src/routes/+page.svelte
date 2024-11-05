<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import { Github, Linkedin, MailIcon, MapPin, Cake } from 'lucide-svelte';
	import Header from '$lib/components/ui/nav/Header.svelte';
	import { onMount } from 'svelte';
	import { ExactBirthdate } from '$lib/utils';

	const education = [
		{
			name: 'University entrance qualification',
			from: '2013',
			to: '2021',
			where: 'Limes Gymnasium Welzheim'
		},
		{
			name: 'Cyber Security Bsc.',
			from: '2021',
			to: 'Now',
			where: 'Mannheim University of Applied Sciences'
		}
	];

	const experience = [
		{ name: 'Sys Admin', from: 'May 2023', to: 'November 2024', where: 'bitExpert' },
		{ name: 'Cyber Security Analyst', from: 'December 2023', to: 'Now', where: 'Bilfinger' }
	];
	let age = $state({
		years: 0,
		months: 0,
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	});
	const profile = {
		name: 'Lukas Siegle',
		occupation: 'Cyber Security Student',
		location: 'Mannheim, Germany',
		// Months go from 0 - 11
		birthday: new Date(2003, 6, 7, 13, 37, 0), 

		github: 'https://github.com/Lukas-Siegle',
		linkedin: 'https://www.linkedin.com/in/lukas-siegle-57628b290/',
		about: `My name is Lukas Siegle, and I am currently pursuing a Bachelor's degree in Cyber Security
					at Hochschule Mannheim, where I am in my 7th semester.`,
		interests: `In addition to my studies in Computer Science with a focus on Cyber Security, I enjoy
					various sports, including Muay Thai, powerlifting, and bodybuilding. I also love traveling
					and enjoying nature.`
	};
	onMount(() => {
		age = ExactBirthdate(profile.birthday);
		setInterval(() => {
			age = ExactBirthdate(profile.birthday);
		}, 1000);
	});
</script>

<div class="flex flex-col gap-4 md:flex-row">
	<Card.Root class="w-full shadow-lg md:w-1/3">
		<Card.Header>
			<Avatar.Root class="mx-auto h-32 w-32">
				<!-- <Avatar.Image src="/profile.jpeg" alt="Profile picture" /> -->
				<Avatar.Fallback>LS</Avatar.Fallback>
			</Avatar.Root>
		</Card.Header>
		<Card.Content class="text-center">
			<h2 class="mb-2 text-xl font-semibold">{profile.name}</h2>
			<div class="mb-4 space-y-2">
				<p class="text-muted-foreground">{profile.occupation}</p>
				<div class="flex items-center justify-center gap-2">
					<MapPin class="h-4 w-4" />
					<span>{profile.location}</span>
				</div>
				<div class="flex items-center justify-center p-4">
					<span class="font-bold -rotate-90">Age</span>
					<div class="font-mono">
					  <div class="grid grid-cols-[auto_auto_auto_auto] gap-x-4 border-l border-secondary pl-2">
						<span class="text-right">Years:</span>
						<span class="inline-block min-w-[3ch] text-right">{age.years}</span>
						<span class="text-right">Months:</span>
						<span class="inline-block min-w-[3ch] text-right">{age.months}</span>
						
						<span class="text-right">Days:</span>
						<span class="inline-block min-w-[3ch] text-right">{age.days}</span>
						<span class="text-right">Hours:</span>
						<span class="inline-block min-w-[3ch] text-right">{age.hours}</span>
						
						<span class="text-right">Minutes:</span>
						<span class="inline-block min-w-[3ch] text-right">{age.minutes}</span>
						<span class="text-right">Seconds:</span>
						<span class="inline-block min-w-[3ch] text-right">{age.seconds}</span>
					  </div>
					</div>
				  </div>
			</div>
			<div class="flex justify-center gap-2">
				<a href={profile.github}>
					<Button variant="outline" size="icon">
						<Github class="h-4 w-4" />
					</Button>
				</a>
				<a href={profile.linkedin}>
					<Button variant="outline" size="icon">
						<Linkedin class="h-4 w-4" />
					</Button>
				</a>
				<a href="/contact">
					<Button variant="outline" size="icon">
						<MailIcon class="h-4 w-4" />
					</Button>
				</a>
			</div>
		</Card.Content>
	</Card.Root>
	<div class="flex w-full flex-col gap-4 md:w-2/3">
		<Card.Root class="shadow-lg">
			<Card.Header>
				<Card.Title>In Short</Card.Title>
			</Card.Header>
			<Card.Content>
				<p>
					{profile.about}
				</p>
			</Card.Content>
		</Card.Root>
		<Card.Root class="shadow-lg">
			<Card.Header>
				<Card.Title>Interests</Card.Title>
			</Card.Header>
			<Card.Content>
				<p>
					{profile.interests}
				</p>
			</Card.Content>
		</Card.Root>
	</div>
</div>
<div class="mt-8 flex w-full flex-col gap-8 lg:flex-row">
	<Card.Root class="w-full shadow-lg lg:w-1/2">
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

	<Card.Root class="w-full shadow-lg lg:w-1/2">
		<Card.Header>
			<Card.Title>Experience</Card.Title>
		</Card.Header>
		<Card.Content>
			<div class="relative pl-4">
				{#each experience.reverse() as item}
					<div class="relative mb-8">
						<div class="absolute left-0 top-0 h-full w-0.5 bg-gray-200"></div>
						<div class="absolute -left-1.5 top-1.5 h-4 w-4 rounded-full bg-primary"></div>
						<div class="ml-8">
							<h3 class="text-text text-lg font-semibold">{item.name}</h3>
							<p class=" font-medium">{item.where}</p>
							<div class="mt-1 text-sm">
								{item.from} - {item.to}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</Card.Content>
	</Card.Root>
</div>
