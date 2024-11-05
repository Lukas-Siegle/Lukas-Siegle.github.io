// src/routes/+page.server.ts
import { LoadBlogPosts } from '$lib/server/blog';

export async function load() {
    const posts = await LoadBlogPosts()
    return  posts 
}