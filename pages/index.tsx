import { FeaturedPosts } from "@/components/home-page/FeaturedPosts";
import { Hero } from "@/components/home-page/Hero";

const POSTS = [
  {
    title: "Understanding TypeScript",
    slug: "understanding-typescript",
    image: "typescript.png",
    excerpt:
      "Learn the basics of TypeScript and how it improves JavaScript development.",
    date: "2024-06-15",
  },
  {
    title: "Next.js: The React Framework",
    slug: "nextjs-react-framework",
    image: "nextjs.png",
    excerpt:
      "Discover the power of Next.js for building server-side rendered React applications.",
    date: "2024-05-10",
  },
  {
    title: "Deploying Your App with Vercel",
    slug: "deploying-with-vercel",
    image: "vercel.png",
    excerpt:
      "Step-by-step guide to deploying your Next.js application with Vercel.",
    date: "2024-04-20",
  },
  {
    title: "Styling in React with CSS Modules",
    slug: "styling-react-css-modules",
    image: "css-modules.png",
    excerpt:
      "How to use CSS Modules for styling your React components effectively.",
    date: "2024-03-25",
  },
  {
    title: "Building REST APIs with Node.js",
    slug: "building-rest-apis-nodejs",
    image: "nodejs.png",
    excerpt:
      "A comprehensive guide to building RESTful APIs using Node.js and Express.",
    date: "2024-02-15",
  },
];

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={POSTS} />
    </>
  );
};

export default HomePage;
