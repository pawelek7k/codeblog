import { PostProps } from "@/types";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { PostHeader } from "./PostHeader";

interface PostContentProps {
  post: PostProps;
}

export const PostContent = ({ post }: PostContentProps) => {
  const { title, image, date, slug, content } = post;
  const imagePath = `/images/posts/${slug}/${image}`;

  const customComponents = {
    p({ node, children }: { node: any; children: React.ReactNode }) {
      const isImage =
        node.children.length > 0 && node.children[0].type === "image";

      if (isImage) {
        const imageNode = node.children[0];
        const src = `/images/posts/${slug}/${imageNode.url}`;
        const alt = imageNode.alt || "Image";

        return (
          <div>
            <Image
              src={src}
              alt={alt}
              width={600}
              height={400}
              layout="responsive"
            />
          </div>
        );
      }
      return <p>{children}</p>;
    },
  };

  return (
    <article>
      <PostHeader title={title} image={imagePath} date={date} />
      <ReactMarkdown components={customComponents}>{content}</ReactMarkdown>
    </article>
  );
};
