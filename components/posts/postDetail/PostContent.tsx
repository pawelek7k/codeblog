import { PostHeader } from "./PostHeader";

const POST = {
  title: "Understanding TypeScript",
  slug: "understanding-typescript",
  image: "typescript.png",
  excerpt:
    "Learn the basics of TypeScript and how it improves JavaScript development.",
  date: "2024-06-15",
  content: "# First post",
};

export const PostContent = () => {
  const imagePath = `/images/posts/${POST.image}`;
  return (
    <article>
      <PostHeader title={POST.title} image={imagePath} />
      CONTENT
    </article>
  );
};
