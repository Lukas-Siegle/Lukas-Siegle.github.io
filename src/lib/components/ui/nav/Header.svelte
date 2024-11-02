<script lang="ts">
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import { cn } from '$lib/utils';
    import { Home, User, Cpu, MailQuestion } from 'lucide-svelte';
    
    const navItems = [
        { href: '/', icon: User, label: 'Home' },
        { href: '/contact', icon: MailQuestion, label: 'Contact' },
        { href: '/technologies', icon: Cpu, label: 'Technologies' }
    ];
    </script>
    
    <nav class={cn(
        "fixed z-10",
        "bottom-0 left-0 right-0 h-16",
        "xl:left-0 xl:top-1/2 xl:h-auto xl:-translate-y-1/2 xl:bottom-auto xl:right-auto"
    )}>
        <div class={cn(
            "bg-secondary/50 backdrop-blur-sm shadow-xl",
            "w-full px-4 py-2",
            "xl:rounded-r-3xl xl:p-4 xl:w-auto"
        )}>
            <ul class={cn(
                "flex justify-around items-center",
                "xl:flex-col xl:space-y-6"
            )}>
                {#each navItems as item}
                    <li>
                        <button
                            on:click={() => goto(item.href)}
                            class={cn(
                                'rounded-full flex items-center justify-center transition-all duration-300',
                                'w-10 h-10',
                                'xl:w-12 xl:h-12',
                                'hover:bg-primary hover:text-primary-foreground',
                                'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background',
                                $page.url.pathname === item.href
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-secondary text-secondary-foreground'
                            )}
                            aria-label={item.label}
                        >
                            <svelte:component this={item.icon} class="w-5 h-5" />
                        </button>
                    </li>
                {/each}
            </ul>
        </div>
    </nav>