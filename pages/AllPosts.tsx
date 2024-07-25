import { PostsGrid } from "@/components/posts/PostsGrid";
import { getAllPosts } from "@/lib/postsUtil";
import { GetStaticProps, InferGetStaticPropsType } from "next";

type AllPostsProps = InferGetStaticPropsType<typeof getStaticProps>;

const AllPosts: React.FC<AllPostsProps> = (props) => {
  return (
    <section>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPosts;
