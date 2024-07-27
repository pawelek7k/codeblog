import { getAllPosts } from "@/lib/postsUtil";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import AllPosts from "../AllPosts";

type AllPostsProps = InferGetStaticPropsType<typeof getStaticProps>;

const AllPostPage: React.FC<AllPostsProps> = (props) => {
  return (
    <>
      <Head>
        <title>CodeBlog - All Posts</title>
        <meta name="description" content="A list of all programming posts" />
      </Head>
      <AllPosts posts={props.posts} />
    </>
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

export default AllPostPage;
