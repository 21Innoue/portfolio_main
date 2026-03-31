"use client";

import ProjectCard from "@/components/projects/ProjectCard";

const projects = [  
  {
    title: "Portfolio Website",
    image: "/projects/Vercel.png",
  },
  {
    title: "E-commerce App",
    image: "/projects/1-2-ecommerce-png.png",
  },
  {
    title: "School System",
    image: "/projects/cpc.png",
  },
  {
    title: "Sci-Fi Game",
    image: "/projects/sci-fi.png",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 text-center">

      <h2 className="text-2xl font-bold mb-8">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6 px-10">

        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}

      </div>
        <div className="mt-6 inline-block border border-gray-500 px-6 py-3 rounded-full text-2xl font-semibold">
        [ All | Web | Networking | School Projects ]
      </div>


    </section>
  );
}