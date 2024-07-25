import { PostContent } from "@/components/posts/postDetail/PostContent";
import { getPostData, getPostsFiles } from "@/lib/postsUtil";

const SinglePostPage = (props) => {
  return <PostContent post={props.post} />;
};

export const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export default SinglePostPage;
