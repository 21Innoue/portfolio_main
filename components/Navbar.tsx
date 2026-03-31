// components/Navbar.tsx

import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-5 shadow bg-white dark:bg-zinc-900 text-black dark:text-white transition-colors">
  <h1>Portfolio</h1>
  
  <div className="flex gap-4">
  
    <Link href="/" className="hover:text-blue-500">Home</Link>
    <Link href="/about" className="hover:text-blue-500">About</Link>
    <Link href="/projects" className="hover:text-blue-500">Projects</Link>
    <Link href="/blog" className="hover:text-blue-500">Blog</Link>
    <Link href="/contact" className="hover:text-blue-500">Contact</Link>
  </div>
  
  <DarkModeToggle />
</nav>
  );
}
