import { PostHeader } from "./PostHeader";

const POST = {
  title: "Understanding TypeScript",
  slug: "understanding-typescript",
  image: "typescript.png",
  excerpt:
    "Learn the basics of TypeScript and how it improves JavaScript development.",
  date: "2024-06-15",
};

export const PostContent = () => {
  return (
    <article>
      <PostHeader title={POST.title} image={POST.image} />
      CONTENT
    </article>
  );
};
