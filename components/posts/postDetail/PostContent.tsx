import { PostProps } from "@/types";
import ReactMarkdown from "react-markdown";
import { PostHeader } from "./PostHeader";

interface PostContentProps {
  post: PostProps;
}

export const PostContent = ({ post }: PostContentProps) => {
  const { title, image, excerpt, date, slug, content } = post;
  const imagePath = `/images/posts/${slug}/${image}`;
  console.log(imagePath);

  return (
    <article>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
};
