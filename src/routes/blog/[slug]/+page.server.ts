import { LoadBlogPost } from '$lib/server/blog.js';

export async function load({ params }) {
  const { slug } = params;
  const post = await LoadBlogPost(slug)
  return post
}