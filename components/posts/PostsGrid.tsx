import { PostItem } from "./PostItem";

export const PostsGrid = ({ posts }: { posts: string }) => {
  return (
    <ul>
      {posts.map((post) => (
        <PostItem />
      ))}
    </ul>
  );
};
