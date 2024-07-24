import { PostsGrid } from "@/components/posts/PostsGrid";
import { getAllPosts } from "@/lib/postsUtil";

const AllPosts = (props) => {
  return (
    <section>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPosts;
