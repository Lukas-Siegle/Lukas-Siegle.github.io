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