import { PostProps } from "../../types";
import { PostItem } from "./PostItem";

interface FeaturedPostsProps {
  posts: PostProps[];
}

export const PostsGrid = ({ posts }: FeaturedPostsProps) => {
  return (
    <ul>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};
