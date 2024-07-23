import { PostItem } from "./PostItem";

export const PostsGrid = ({ posts }: { posts: Post[] }) => {
  return (
    <ul>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};
