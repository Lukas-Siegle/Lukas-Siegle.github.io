<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Github, MapPin, MailIcon } from 'lucide-svelte';
	import { profile } from '$lib/data';
	import { onMount } from 'svelte';
	import { ExactBirthdate } from '$lib/utils';
	import Button from '../button/button.svelte';
	import Linkedin from 'lucide-svelte/icons/linkedin';

	let age = $state({
		years: 0,
		months: 0,
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	});

	onMount(() => {
		age = ExactBirthdate(profile.birthday);
		setInterval(() => {
			age = ExactBirthdate(profile.birthday);
		}, 1000);
	});
</script>

<div class="flex flex-col gap-4 md:flex-row">
	<Card.Root class="w-full shadow-lg lg:w-1/3">
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
					<span class="-rotate-90 font-bold">Age</span>
					<div class="font-mono">
						<div
							class="grid grid-cols-[auto_auto_auto_auto] gap-x-4 border-l border-secondary pl-2"
						>
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
