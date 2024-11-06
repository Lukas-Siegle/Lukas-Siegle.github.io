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

// Lädt alle Blogposts und extrahiert die Metadaten
export async function LoadBlogPosts() {
  const posts = Object.keys(modules).map((filePath) => {
    const file = modules[filePath];
    const parsed = parseMarkdown(file);
    return {
      slug: filePath.split('/').pop()?.replace('.md', ''), // Slug aus dem Dateinamen
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
    throw new Error("Blogpost nicht gefunden");
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
