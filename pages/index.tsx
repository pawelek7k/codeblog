import { FeaturedPosts } from "@/components/home-page/FeaturedPosts";
import { Hero } from "@/components/home-page/Hero";
import { getFeaturedPosts } from "@/lib/postsUtil";

const HomePage = (props) => {
  return (
    <>
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
