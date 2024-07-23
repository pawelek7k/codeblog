import Image from "next/image";
import Link from "next/link";

interface ItemProps {
  post: Post[];
}

export const PostItem = ({ post }: ItemProps) => {
  const { title, image, excerpt, date, slug } = post;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <li>
      <Link href={slug}>
        <a href="">
          <div>
            <Image src={imagePath} alt={title} width={300} height={200} />
          </div>
          <div>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};
