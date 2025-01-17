import { PostProps } from "@/types";
import Image from "next/legacy/image";
import Link from "next/link";

interface Props {
  post: PostProps;
}

export const PostItem = ({ post }: Props) => {
  const { title, image, excerpt, date, slug } = post;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className="w-[20rem] h-[24rem]">
      <Link href={linkPath}>
        <div>
          <Image
            src={imagePath}
            alt={title}
            width={300}
            height={200}
            layout="responsive"
            className="rounded-t-lg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-base md:text-lg "> {title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};
