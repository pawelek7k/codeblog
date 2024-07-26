import { PostsGrid } from "@/components/posts/PostsGrid";

const AllPosts = ({ posts }) => {
  return (
    <section className="p-24">
      <h1 className="text-2xl md:text-4xl">All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
