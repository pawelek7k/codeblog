import { PostProps } from "../../types";
import { PostsGrid } from "../posts/PostsGrid";

interface FeaturedPostsProps {
  posts: PostProps[];
}

export const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  return (
    <section>
      <h2 className="text-xl mt-24 md:text-3xl text-center">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};
