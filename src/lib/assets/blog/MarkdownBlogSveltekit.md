---
title: Creating a Markdown Blog with Sveltekit
date: '2024-11-05'
description: 'A step-by-step guide to building a blog with SvelteKit and Markdown'
author: 'Lukas Siegle'
tags: ['Sveltekit', 'Markdown']
---
## Prerequisites
- SvelteKit basic knowledge
- 25 minutes of your time

First, install the necessary packages:

```bash
npm install gray-matter marked
npm install @types/node -D

```
You must also add `assetsInclude: ['**/*.md']` to your `vite.config.ts`, which should look something like this:

```typescript
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  assetsInclude: ['**/*.md'],
  plugins: [sveltekit()]
});
```

---

Set up the required directory structure as follows:

1. In your `lib` folder, create an `assets/blog` directory to store your blog posts.
2. To display these posts, add `+page.svelte` and `+page.server.ts` files in the `routes` folder; these will later be used to show all blogs for users to browse.
3. Next, create a `[slug]` directory within `routes`, containing its own `+page.svelte` and `+page.server.ts` files, which will render individual blog posts.
4. Finally, add a `blog.ts` file in the `lib/server` directory—this will act as a helper for loading the blog posts.

Your project structure should look like this:

```markdown
src
├── lib
│   ├── assets
│   │   └── blog
│   │       ├── blog1.md 
│   │       └── blog2.md
│   └── server
│       └── blog.ts
└── routes
    ├── +page.svelte 
    ├── +page.server.ts
    └── [slug]
        ├── +page.svelte 
        └── +page.server.ts
```

Within each Markdown file, you can include metadata that we will utilize later on.

```markdown
---
title: Creating a Markdown Blog with Sveltekit
date: '2024-11-05'
description: 'How to create a Markdown Blog with Sveltekit'
author: 'John Doe'
tags: ['Tag', 'Tag2']
---
Your content goes here
```
To set up our blog, we’ll create some functions inside `blog.ts` to load and parse Markdown files stored in the `/lib/assets/blog` directory. We’ll use `gray-matter` to read both the Markdown content and any metadata (like title, date, and author) from each file. You can learn more about `gray-matter` [here](https://www.npmjs.com/package/gray-matter).

### Setting Up Metadata Parsing

The `gray-matter` library lets us separate metadata, defined in YAML front matter, from the main content of our Markdown files. This metadata could include details like `title`, `date`, and `tags`, which we can extract as follows:

```typescript
const { data, content } = matter(file);
```

In this example, `data` holds the parsed metadata, and `content` contains the Markdown content itself.

## Complete blog.ts Example

Our finished `blog.ts` file will include three functions:

```typescript
// src/lib/server/blog.ts
import matter from 'gray-matter';

const modules: any = import.meta.glob('/src/lib/assets/blog/*.md', { eager: true, query: '?raw', import: 'default'
 });

function parseMarkdown(file: any) {
  const { data, content } = matter(file);
  return {
    title: data.title,
    date: data.date,
    description: data.description,
    author: data.author,
    tags: data.tags,
    content,
  };
}

export async function LoadBlogPosts() {
  const posts = Object.keys(modules).map((filePath) => {
    const file = modules[filePath];
    const parsed = parseMarkdown(file);
    return {
      slug: filePath.split('/').pop()?.replace('.md', ''),
      ...parsed,
    };
  });

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return { posts };
}

export async function LoadBlogPost(slug: string) {
  const filePath = `/src/lib/assets/blog/${slug}.md`;
  const file = modules[filePath];

  if (!file) {
    throw new Error("Post not found");
  }

  const { title, author, description, date, content } = parseMarkdown(file);

  return {
    title,
    author,
    description,
    date,
    content,
  };
}
```

The key points are:

1. The `matter` library is used to parse the Markdown files and extract the frontmatter data (title, date, etc.) and the content.
2. The `import.meta.glob` function is used to dynamically import all the Markdown files in the blog directory.
3. The `LoadBlogPosts()` function collects and processes all the blog posts, sorting them by date.
4. The `LoadBlogPost(slug)` function retrieves a single blog post by its slug (the filename without the `.md` extension).



---

In SvelteKit, you can pass data to pages by creating a load function inside `+page.server.ts`. This server-side function fetches the data and passes it to the page for rendering. For our blog, we can load all posts when the root route (`/`) opens (this is your `routes/+page.svelte` file) by calling the function from `blog.ts` and returning the data like this:

```typescript
// src/routes/+page.server.ts
import { LoadBlogPosts } from '$lib/server/blog';. 

export async function load() {
    const posts = await LoadBlogPosts();
    return { posts };
}
```
After that, we can access the returned data inside our `+page.svelte` and display it:

```typescript
<!-- src/routes/+page.svelte -->
<script lang="ts">
    let { data } = $props();
</script>

<div class="posts">
    {#each data.posts as post}
        <a href="/{post.slug}" class="post">
            <h3>{post.title}</h3>
            <p>{post.date}</p>
            <p>{post.description}</p>
            <div class="tags">
                {#each post.tags as tag}
                    <span class="tag">{tag}</span>
                {/each}
            </div>
        </a>
    {/each}
</div>
```

**Note**: The `data` object contains all the values returned by the `LoadBlogPosts` function from `blog.ts`. 

---

Now that we can display our blog posts and have a dynamic path to view individual posts, let’s set up the `[slug]` directory to view each blog post.

First, load the blog post with your page server using the `LoadBlogPost` function from `blog.ts`, as shown here:

```typescript
// src/routes/[slug]/+page.server.ts
import { LoadBlogPost } from '$lib/server/blog.js';

export async function load({ params }) {
  const { slug } = params;
  const post = LoadBlogPost(slug)
  return post
}
```

In `[slug]/+page.svelte`, retrieve your data with `props` and render the content using `marked`:

```typescript
<!-- src/routes/[slug]/+page.svelte -->
<script lang="ts">
    import { marked } from "marked";

    let { data } = $props();
</script>

<a href="/" class="go-back">Go Back</a>
<div class="container">
    <div class="content">
        {@html marked(data.content)}
    </div>
</div>

```

---

Now, all that's left is to add some styling and error handling, and you’re all set! For reference, you can find the code and some basic styling of the entire code [here](https://github.com/Lukas-Siegle/Example-Markdown-Blog). Additionally, you can view the code for the blog you’re currently reading [here](https://github.com/Lukas-Siegle/Personal-Website).
