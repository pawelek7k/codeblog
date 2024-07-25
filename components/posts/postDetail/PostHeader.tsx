import Image from "next/legacy/image";

export const PostHeader = ({ title, image }) => {
  return (
    <header>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={300} height={200} />
    </header>
  );
};
