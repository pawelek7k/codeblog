import Link from "next/link";
import { Logo } from "./Logo";

export const MainNavigation = () => {
  return (
    <header className="flex justify-evenly p-4 bg-background text-text">
      <Link href="/">
        <Logo />
      </Link>

      <nav>
        <ul className="flex gap-8 tracking-widest">
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
