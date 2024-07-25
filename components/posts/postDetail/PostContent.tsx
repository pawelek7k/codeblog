import { PostProps } from "@/types";
import ReactMarkdown from "react-markdown";
import { PostHeader } from "./PostHeader";

interface PostContentProps {
  post: PostProps;
}

export const PostContent = ({ post }: PostContentProps) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};
