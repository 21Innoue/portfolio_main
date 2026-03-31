// components/projects/ProjectCard.tsx
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  image: string;
}

export default function ProjectCard({ title, image }: ProjectCardProps) {
  return (
    <div className="border dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded transition">
      
      
      <Image
        src={image}
        alt={`${title} project thumbnail`}
        width={600}
        height={340}
        className="mb-3 rounded"
      />
      
      <h3>{title}</h3>
      
    </div>
  );
}
