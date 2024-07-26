interface PostProps {
  title: string;
  image: string;
  date: string;
}

export const PostHeader = ({ title, image, date }: PostProps) => {
  const style = {
    backgroundImage: `linear-gradient(to bottom, rgba(9, 6, 14, 0.5), rgba(9, 6, 14, 1)), url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <header className="flex items-center justify-evenly p-24" style={style}>
      <h1 className="text-2xl md:text-4xl">{title}</h1>
      <time>{date}</time>
    </header>
  );
};
