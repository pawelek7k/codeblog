import { PostsGrid } from "@/components/posts/PostsGrid";
import { POSTS } from ".";

const AllPosts = () => {
  return (
    <section>
      <h1>All Posts</h1>
      <PostsGrid posts={POSTS} />
    </section>
  );
};

export default AllPosts;
