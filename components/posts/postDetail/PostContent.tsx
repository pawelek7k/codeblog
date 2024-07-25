import ReactMarkdown from "react-markdown";
import { PostHeader } from "./PostHeader";

const POST = {
  title: "Understanding TypeScript",
  slug: "understanding-typescript",
  image: "understanding-typescript.jpg",
  excerpt:
    "Learn the basics of TypeScript and how it improves JavaScript development.",
  date: "2024-06-15",
  content: "# First post",
};

export const PostContent = () => {
  const imagePath = `/images/posts/${POST.slug}/${POST.image}`;
  return (
    <article>
      <PostHeader title={POST.title} image={imagePath} />
      <ReactMarkdown>{POST.content}</ReactMarkdown>
    </article>
  );
};
