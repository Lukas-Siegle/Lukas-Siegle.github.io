<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import { Github, Linkedin, MailIcon } from 'lucide-svelte';

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

	const experience  = [
		{ name: 'Sys Admin', from: 'May 2023', to: 'November 2024', where: 'bitExpert' },
		{ name: 'Cyber Security Analyst', from: 'Dzember 2023', to: 'Now', where: 'Bilfinger' }
	];
</script>

<div class="container mx-auto p-4">
	<h1 class="mb-6 text-3xl font-bold">About Me</h1>
	<div class="flex flex-col gap-4 md:flex-row">
		<Card.Root class="w-full md:w-1/3 shadow-lg">
			<Card.Header>
				<Avatar.Root class="mx-auto h-32 w-32">
					<Avatar.Image src="/profile.jpeg" alt="Profile picture" />
					<Avatar.Fallback>JD</Avatar.Fallback>
				</Avatar.Root>
			</Card.Header>
			<Card.Content class="text-center">
				<h2 class="mb-2 text-xl font-semibold">Lukas Siegle</h2>
				<p class="mb-4 -foreground">Cyber Security Student</p>
				<p class="mb-2">Age: 21</p>
				<p class="mb-4">Location: Mannheim, Germany</p>
				<div class="flex justify-center space-x-2">
					<a href="https://github.com/Lukas-Siegle">
						<Button variant="outline" size="icon">
							<Github class="h-4 w-4" />
						</Button>
					</a>
					<a href="https://www.linkedin.com/in/lukas-siegle-57628b290/">
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
				<Card.Content>
					<p>
						Hi there! Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
						eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
						vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
						takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
						sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
						aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
						rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
						amet.
					</p>
				</Card.Content>
			</Card.Root>
			<Card.Root class="shadow-lg">
				<Card.Header>
					<Card.Title>Interests</Card.Title>
				</Card.Header>
				<Card.Content>
					<p>
						In addition to my studies in Computer Science with a focus on Cyber Security, I enjoy
						various sports, including Muay Thai, powerlifting, and bodybuilding. 
                        I also love traveling and enjoying nature.
					</p>
				</Card.Content>
			</Card.Root>
		</div>
	</div>
	<div class="mt-8 flex w-full flex-col lg:flex-row gap-8">
        <Card.Root class="w-full lg:w-1/2 shadow-lg">
          <Card.Header>
            <Card.Title>Education</Card.Title>
          </Card.Header>
          <Card.Content>
            <div class="relative pl-4">
              {#each education.reverse() as item}
                <div class="mb-8 relative">
                  <div class="absolute left-0 top-0 h-full w-0.5 bg-gray-200"></div>
                  <div class="absolute -left-1.5 top-1.5 h-4 w-4 rounded-full bg-primary"></div>
                  <div class="ml-8">
                    <h3 class="font-semibold text-lg text-text">{item.name}</h3>
                    <p class="font-medium">{item.where}</p>
                    <div class="text-sm mt-1">
                      {item.from} - {item.to}
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          </Card.Content>
        </Card.Root>
      
        <Card.Root class="w-full lg:w-1/2 shadow-lg">
          <Card.Header>
            <Card.Title>Experience</Card.Title>
          </Card.Header>
          <Card.Content>
            <div class="relative pl-4">
              {#each experience.reverse() as item}
                <div class="mb-8 relative">
                  <div class="absolute left-0 top-0 h-full w-0.5 bg-gray-200" ></div>
                  <div class="absolute -left-1.5 top-1.5 h-4 w-4 rounded-full bg-primary"></div>
                  <div class="ml-8">
                    <h3 class="font-semibold text-lg text-text">{item.name}</h3>
                    <p class=" font-medium">{item.where}</p>
                    <div class="text-sm mt-1">
                      {item.from} - {item.to}
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          </Card.Content>
        </Card.Root>
      </div>
</div>
