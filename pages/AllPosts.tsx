import { PostsGrid } from "@/components/posts/PostsGrid";

const AllPosts = ({ posts }) => {
  return (
    <section>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
