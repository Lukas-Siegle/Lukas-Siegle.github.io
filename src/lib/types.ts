export interface Technology {
    name: string;
    page: string;
    img: string;
}

export interface Post {
    title: string;
    author: string;
    description: string;
    date: string;
    tags: string[];
    slug: string;
    content?: string;
}