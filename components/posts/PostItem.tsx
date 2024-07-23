import Image from "next/image";
import Link from "next/link";

interface ItemProps {
  title: string;
  image: string;
  excerpt: string;
  date: string;
  slug: string;
}

export const PostItem = ({ title, image, excerpt, date, slug }: ItemProps) => {
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
