import { PostProps } from "@/types";
import Image from "next/legacy/image";
import ReactMarkdown from "react-markdown";
import { PostHeader } from "./PostHeader";

interface PostContentProps {
  post: PostProps;
}

export const PostContent = ({ post }: PostContentProps) => {
  const { title, image, excerpt, date, slug, content } = post;
  const imagePath = `/images/posts/${slug}/${image}`;

  const customRenderers = {
    image({ src, alt }: { src: string; alt: string }) {
      return (
        <Image
          src={`/images/posts/${slug}/${src}`}
          alt={alt}
          width={300}
          height={200}
        />
      );
    },
  };

  return (
    <article>
      <PostHeader title={title} image={imagePath} date={date} />
      <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
    </article>
  );
};
