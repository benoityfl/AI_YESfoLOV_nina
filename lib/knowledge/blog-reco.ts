import { BLOG_POSTS } from "./blog";

export function recommendBlog(message: string) {
  const m = message.toLowerCase();

  return BLOG_POSTS.filter(post =>
    post.tags?.some(tag => m.includes(tag.toLowerCase())) ||
    post.themes?.some(theme => m.includes(theme.toLowerCase()))
  ).slice(0, 3);
}