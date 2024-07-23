import Image from "next/image";

export const PostHeader = ({ title, image }) => {
  return (
    <header>
      <h1>{title}</h1>
      <Image src={image} alt={title} />
    </header>
  );
};
