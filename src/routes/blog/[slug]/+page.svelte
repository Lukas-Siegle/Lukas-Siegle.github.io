<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import CopyButton from '$lib/components/ui/copy-button/button.svelte';
	import { ArrowLeft } from 'lucide-svelte';
	import { Separator } from '$lib/components/ui/separator';
	import { Marked } from 'marked';
	import { markedHighlight } from 'marked-highlight';
	import { onMount } from 'svelte';
	import hljs from 'highlight.js';
	import { mount } from 'svelte';
	import 'highlight.js/styles/atom-one-dark.css';

	import 'highlight.js/lib/languages/typescript';
	import 'highlight.js/lib/languages/bash';
	import 'highlight.js/lib/languages/markdown';

	let { data } = $props();

	const marked = new Marked(
		markedHighlight({
			langPrefix: 'hljs language-',
			highlight(code, lang) {
				const language = hljs.getLanguage(lang) ? lang : 'plaintext';
				return hljs.highlight(code, { language }).value;
			}
		})
	);

	function renderMarkdown(content: string) {
		return marked.parse(content);
	}
	onMount(() => {
    for (const node of document.querySelectorAll('pre > code')) {
        const pre = node.parentElement;
        if (!pre || pre.querySelector('button')) continue;

        // Add positioning class to pre if not already present
        pre.classList.add('relative');

        mount(CopyButton, {
            target: pre,
            props: {
                content: node.textContent ?? '',
                style: 'absolute top-2 right-2 z-10'
            }
        });
    }
});
</script>

<div class="container mx-auto px-4 py-12 lg:px-0">
	<div class="mx-auto max-w-3xl">
		<div class="mb-8 flex items-center">
			<a href="/blog">
				<Button size="icon" variant="ghost" class="mr-4">
					<ArrowLeft />
				</Button>
			</a>
			<div>
				<h1 class="mb-2 text-4xl font-bold text-primary">{data.title}</h1>
				<p class="text-lg text-muted-foreground">{data.date} - {data.author}</p>
			</div>
		</div>
		<Separator />
		<div class="mb-8 mt-8">
			<p class="text-lg text-muted-foreground">{data.description}</p>
		</div>
		<Separator />
		<div class="prose prose-lg prose-slate markdown dark:prose-dark mt-8 max-w-none font-sans">
			{#if data.content}
				{@html renderMarkdown(data.content)}
			{/if}
		</div>
	</div>
</div>

<style lang="postcss">
	:global(.markdown) {
		line-height: 1.6;
		font-size: 1rem;
	}

	:global(.markdown h1) {
		font-size: 2rem;
		margin: 2rem 0 1rem;
	}

	:global(.markdown h2) {
		font-size: 1.5rem;
		margin: 1.5rem 0 0.75rem;
	}

	:global(.markdown h3) {
		font-size: 1.25rem;
		margin: 1.25rem 0 0.5rem;
	}

	:global(.markdown h4) {
		font-size: 1.1rem;
		margin: 1rem 0 0.25rem;
	}

	:global(.markdown h5) {
		font-size: 1rem;
		margin: 0.75rem 0 0.1rem;
	}

	:global(.markdown pre) {
		background-color: hsl(12 6.5% 15.1%);
		border: 1px solid hsl(var(--border));
		border-radius: 0.5rem;
		padding: 1.25rem;
		margin: 1.5rem 0;
		overflow-x: auto;
	}

	:global(.markdown pre code) {
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
		font-size: 0.875rem;
		line-height: 1.5;
		background-color: transparent;
		padding: 0;
		border-radius: 0;
	}

	:global(.markdown code) {
		background-color: hsl(var(--secondary));
		padding: 2px 4px;
		border-radius: 0.25rem;
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
		font-size: 0.875em;
	}

	:global(.markdown li) {
		margin-bottom: 0.75rem;
		margin-left: 35px;
	}

	:global(.markdown ul) {
		margin-top: 1.25rem;
		margin-bottom: 1.25rem;
		list-style-type: disc;
	}

	:global(.markdown ol) {
		margin-top: 1.25rem;
		margin-bottom: 1.25rem;
		list-style-type: number;
	}

	:global(.markdown hr) {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	:global(.markdown a) {
		color: hsl(var(--primary));
		text-decoration-color: hsl(var(--primary-light));
		text-decoration-thickness: 2px;
	}

	:global(.markdown img) {
		border-radius: 5px;
		border: solid 1px black;
		margin: 15px auto;
		width: 90%;

	}
</style>
