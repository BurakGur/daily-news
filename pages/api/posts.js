import { getPosts } from "../../src/news-posts"

export default async (req, res) => {
  const posts = await getPosts();
  res.json({ posts })
}