import { getAllPosts } from "@/lib/postsUtil";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import AllPosts from "../AllPosts";

type AllPostsProps = InferGetStaticPropsType<typeof getStaticProps>;

const AllPostPage: React.FC<AllPostsProps> = (props) => {
  return <AllPosts posts={props.posts} />;
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
