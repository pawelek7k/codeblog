import { PostProps } from "../../types";
import { PostsGrid } from "../posts/PostsGrid";

interface FeaturedPostsProps {
  posts: PostProps[];
}

export const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  return (
    <section>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};
