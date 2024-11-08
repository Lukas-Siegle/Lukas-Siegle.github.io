import matter from 'gray-matter';
import path from 'path';
import * as fs from 'fs/promises';
import type { Post } from '$lib/types';

const postsDirectory = path.join(process.cwd(), 'src', 'lib', 'assets', 'blog');


function sanitizeSlug(slug: string | undefined): string {
  if (!slug){
    return '';
  }
  return slug.replace(/[^a-zA-Z0-9-_]/g, '');
}


function parseMarkdown(fileContents: string, slug: string) {
  const { data, content } = matter(fileContents);
  return {
    title: data.title,
    date: data.date,
    description: data.description,
    author: data.author,
    tags: data.tags,
    slug: slug,
    content,
  };
}

// export async function LoadBlogPosts() {
//   const filenames = await fs.readdir(postsDirectory);

//   const posts = await Promise.all(
//     filenames.map(async (filename) => {
//       const filePath = path.join(postsDirectory, filename);
//       const fileContents = await fs.readFile(filePath, 'utf8');
//       const parsed = parseMarkdown(fileContents);

//       return {
//         slug: filename.replace('.md', ''),
//         ...parsed,
//       };
//     })
//   );

//   posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

//   return { posts };
// }

// export async function LoadBlogPost(slug: string) {
//   const sanitizedSlug = sanitizeSlug(slug);

//   const filePath = path.join(postsDirectory, `${sanitizedSlug}.md`);

//   if (!filePath.startsWith(postsDirectory)) {
//     console.log("Invalid slug");
//   }

//   try {
//     const fileContents = await fs.readFile(filePath, 'utf8');
//     const parsed = parseMarkdown(fileContents);
//     return parsed;
//   } catch (error) {
//     console.log("Blogpost not found: " + error);
//   }
// }


const modules: any = import.meta.glob('/src/lib/assets/blog/*.md', { eager: true, query: '?raw', import: 'default' });


export async function LoadBlogPosts() {
  const posts = Object.keys(modules).map((filePath) => {
    const file = modules[filePath];
    const slug = filePath.split('/').pop()?.replace('.md', '')
    const sanitized_slug = sanitizeSlug(slug);
    const parsed = parseMarkdown(file, sanitized_slug);
    return parsed;
  });

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return { posts };
}

export async function LoadBlogPost(slug: string): Promise<Post> {
  const filePath = `/src/lib/assets/blog/${slug}.md`;
  const file = modules[filePath];

  if (!file) {
    throw new Error("Blogpost nicht gefunden");
  }

  const parsed: Post = parseMarkdown(file, slug);
  return parsed;
}
