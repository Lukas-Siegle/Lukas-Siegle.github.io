<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';
	import { Home, User, Cpu, MailQuestion, Scroll } from 'lucide-svelte';

	const navItems = [
		{ href: '/', icon: User, label: 'Home' },
		{ href: '/blog', icon: Scroll, label: 'Blog' },
		{ href: '/technologies', icon: Cpu, label: 'Technologies' },
		{ href: '/contact', icon: MailQuestion, label: 'Contact' }
	];

	let hoveredItem: typeof navItems[0] | null = null;

	function handleMouseEnter(item: typeof navItems[0]) {
		hoveredItem = item;
	}

	function handleMouseLeave() {
		hoveredItem = null;
	}
</script>

<nav
	class={cn(
		'fixed z-10',
		'bottom-0 left-0 right-0 h-16',
		'xl:bottom-auto xl:left-0 xl:right-auto xl:top-1/2 xl:h-auto xl:-translate-y-1/2'
	)}
>
	<div
		class={cn(
			'bg-secondary/50 shadow-xl backdrop-blur-sm',
			'w-full px-4 py-2',
			'xl:w-auto xl:rounded-r-3xl xl:p-4'
		)}
	>
		<ul class={cn('flex items-center justify-around', 'xl:flex-col xl:space-y-6')}>
			{#each navItems as item}
				<li class="relative">
					<button
						on:click={() => goto(item.href)}
						on:mouseenter={() => handleMouseEnter(item)}
						on:mouseleave={handleMouseLeave}
						class={cn(
							'flex items-center justify-center rounded-3xl transition-all duration-300',
							'h-10 w-10',
							'xl:h-12 xl:w-12',
							'hover:bg-primary hover:text-primary-foreground hover:rounded-xl',
							'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background',
							$page.url.pathname === item.href ||
								($page.url.pathname.startsWith(item.href) && item.href !== '/') ||
								($page.url.pathname === '/' && item.href === '/')
								? 'bg-primary text-primary-foreground'
								: 'bg-secondary text-secondary-foreground'
						)}
						aria-label={item.label}
					>
						<svelte:component this={item.icon} class="h-5 w-5" />
					</button>
					{#if hoveredItem === item}
						<div
							class={cn(
								'absolute p-3 py-3 min-w-max rounded-md shadow-md',
								'bg-secondary text-muted-foreground text-xs font-bold',
								'transition-all duration-100 scale-100 origin-left',
								'xl:left-14 xl:top-1/2 xl:-translate-y-1/2',
								'bottom-full left-1/2 -translate-x-1/2 mb-2 xl:mb-0 xl:translate-x-0',
								'flex items-center justify-center'
							)}
						>
							{item.label}
						</div>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</nav>