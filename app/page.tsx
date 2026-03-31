// app/page.tsx

import Hero from "../components/home/Hero";
import Skills from "../components/home/Skills";
import FeaturedProjects from "../components/home/FeaturedProjects";

export default function Home() {
  return (
    <main>

      <Hero />
      <Skills />
      <FeaturedProjects />  
      

      <div className="text-center my-10">
        <a
          href="/contact"
          className="px-6 py-3 bg-black text-white rounded transition hover:scale-105"
        >
          Contact Me
        </a>
      </div>

    </main>
  );
}
