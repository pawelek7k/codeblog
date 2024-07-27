import { PostProps } from "@/types";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { MarkdownNode } from "react-markdown/lib/ast-to-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { hopscotch } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { PostHeader } from "./PostHeader";

interface PostContentProps {
  post: PostProps;
}

const customComponents = {
  p({ node, children }: { node: MarkdownNode; children: React.ReactNode }) {
    const isImage =
      node.children.length > 0 && (node.children[0] as any).type === "image"; // Typowanie obrazu

    if (isImage) {
      const imageNode = node.children[0] as any;
      const src = `/images/posts/${imageNode.url}`;
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
  code({
    node,
    inline,
    className,
    children,
  }: {
    node: MarkdownNode;
    inline: boolean;
    className: string;
    children: React.ReactNode;
  }) {
    const language = className?.replace(/language-/, "") || "text";
    return (
      <SyntaxHighlighter style={hopscotch} language={language}>
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    );
  },
};

export const PostContent = ({ post }: PostContentProps) => {
  const { title, image, date, slug, content } = post;
  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <article>
      <PostHeader title={title} image={imagePath} date={date} />
      <ReactMarkdown components={customComponents}>{content}</ReactMarkdown>
    </article>
  );
};
