---
title: Creating a Markdown Blog with Sveltekit
date: '2024-11-05'
description: 'This is my first blog post about creating a blog with Sveltekit'
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
---

Set up the required directory structure as follows:

1. In your `static` folder, create a `blog` directory to store your blog posts.
2. To display these posts, add `+page.svelte` and `+page.server.ts` files in the `routes` folder these will later be used to show all blogs for users to browse.
3. Next, create a `[slug]` directory within `routes`, containing its own `+page.svelte` and `+page.server.ts` files, which will render individual blog posts.
4. Finally, add a `blog.ts` file in the `lib/server` directory — this will act as a helper for loading the blog posts.

Your project structure should look like this:

```
your_project
│
├── src
│   ├── lib
│   │   └── server
│   │       └── blog.ts
│   │    
│   └── routes
│       ├── +page.svelte 
│       ├── +page.server.ts
│       └── [slug]
│           ├── +page.svelte 
│           └── +page.server.ts
│
└── static
    └── blog
        ├── blog1.md
        └── blog2.md
```

Within each Markdown file, you can include metadata that we will utilize later on.

```blog1.md
---
title: Creating a Markdown Blog with Sveltekit
date: '2024-11-05'
description: 'How to create a Markdown Blog with Sveltekit and Marked'
author: 'Lukas Siegle'
tags: ['Sveltekit', 'Markdown']
---
Your content goes here
```
To set up our blog, we’ll create some functions inside `blog.ts` to load and parse Markdown files stored in the `static/blog` directory. We’ll use `gray-matter` to read both the Markdown content and any metadata (like title, date, and author) from each file. You can learn more about `gray-matter` [here](https://www.npmjs.com/package/gray-matter).

### Setting Up Metadata Parsing

The `gray-matter` library lets us separate metadata, defined in YAML front matter, from the main content of our Markdown files. This metadata could include details like `title`, `date`, and `tags`, which we can extract as follows:

```typescript
const fileContents = fs.readFileSync(filePath, 'utf8');
const { data, content } = matter(fileContents);
```

In this example, `data` holds the parsed metadata, and `content` contains the Markdown content itself.

## Complete blog.ts Example

Our finished `blog.ts` file will include two functions:

- `LoadBlogPosts`: Reads all Markdown files in the `static/blog` directory, extracts metadata for each post, and returns a summary list of posts.
- `LoadBlogPost`: Reads a specific post by its filename, extracts its metadata, and returns the full content of the post.

Here’s the code:

```typescript
// src/lib/server/blog.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function LoadBlogPosts() {
  const postsDirectory = path.resolve('static/blog');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug: filename.replace('.md', ''),
        title: data.title,
        date: data.date,
        description: data.description,
        author: data.author,
        tags: data.tags,
      };

    })
  );

  return { posts };
}

export async function LoadBlogPost(slug: string) {
  const filePath = path.resolve(`static/blog/${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    title: data.title,
    author: data.author,
    description: data.description,
    date: data.date,
    content,
  };

}
```

### Explanation

1. **LoadBlogPosts**:
   - Locates the `static/blog` directory.
   - Reads each Markdown file in the directory, parsing its content and metadata.
   - Returns an array of posts with essential details.

2. **LoadBlogPost**:
   - Takes a `slug` as input to locate a specific Markdown file.
   - Reads and parses the file’s content and metadata.
   - Returns both the full content and metadata, ready to display.


Here’s a cleaner, more concise version:

---

Now, let’s pass the data to our pages. We’ll start by displaying all blog posts in `/src/routes/+page.server.ts` using the `LoadBlogPosts` function from `blog.ts`, which should look like this:

```typescript
// src/routes/+page.server.ts
import { LoadBlogPosts } from '$lib/server/blog';

export async function load() {
    const posts = await LoadBlogPosts()
    return  posts 
}
```

Alternatively, you could fetch the data directly in `/src/routes/+page.svelte` with `onMount`, but here, we’ll use the page server.

In your `+page.svelte` file, you can access the data like this:

```svelte
<!-- src/routes/+page.svelte -->
<script lang="ts">
    let { data } = $props();
</script>

<div class="posts">
    {#each data.posts as post}
        <a href="/{post.slug}" class="post">
            <h3>{post.title}</h3>
            <p class="meta">{post.date}</p>
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

`data` now contains everything returned from `LoadBlogPosts` in `blog.ts`. You can design your page to display your content as desired. 

---

Now that we can display our blog posts and have a dynamic path to view individual posts, let’s set up the `[slug]` directory to view each blog post.

First, load the blog post in your page server using the `LoadBlogPost` function from `blog.ts`, as shown here:

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

```svelte
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


This setup allows you to dynamically view each blog post by parsing and displaying its content. The `data` object contains everything returned by `LoadBlogPost`.

---

Now, all that's left is to add some styling and error handling, and you’re all set! For reference, you can find the code and some basic styling of the entire code for this blog [here](https://github.com/Lukas-Siegle/Example-Markdown-Blog). Additionally, you can view the code for the blog you’re currently reading [here]().
