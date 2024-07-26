import { PostProps } from "../../types";
import { PostItem } from "./PostItem";

interface FeaturedPostsProps {
  posts: PostProps[];
}

export const PostsGrid = ({ posts }: FeaturedPostsProps) => {
  return (
    <ul className="flex items-center justify-center mt-20 gap-10">
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};
