import { FeaturedPosts } from "@/components/home-page/FeaturedPosts";
import { Hero } from "@/components/home-page/Hero";
import { getFeaturedPosts } from "@/lib/postsUtil";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";

type AllPostsProps = InferGetStaticPropsType<typeof getStaticProps>;

const HomePage: React.FC<AllPostsProps> = (props) => {
  return (
    <>
      <Head>
        <title>CodeBlog!</title>
        <meta name="description" content="Posts about programming" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default HomePage;
