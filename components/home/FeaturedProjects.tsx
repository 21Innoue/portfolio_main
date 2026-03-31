"use client";

import { motion } from "framer-motion";
import ProjectCard from "../projects/ProjectCard";

const featuredProjects = [
  {
    title: "Sci-fi Game",
    image: "/projects/sci-fi.png",
  },
  {
    title: "E-commerce App",
    image: "/projects/1-2-ecommerce-png.png",
  },
  {
    title: "School System",
    image: "/projects/cpc.png",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 text-center">

      <h2 className="text-2xl font-bold mb-10 text-gray-900 dark:text-gray-100 transition-colors">
        Featured Projects
      </h2>

      {/* Animated Grid */}
      <div className="grid md:grid-cols-3 gap-6 px-10">

        {featuredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}

      </div>

    </section>
  );
}
