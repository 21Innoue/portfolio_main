// app/projects/page.tsx

import ProjectCard from "../../components/projects/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="p-10 text-center">

      <h1 className="text-2xl font-bold mb-6">My Projects</h1>

      <div className="grid grid-cols-2 gap-6">

        <ProjectCard title="Project 1" image="/public/projects/Logo.png" />
        <ProjectCard title="Project 2" image="/public/projects/1-2-ecommerce=png.png" />  
        <ProjectCard title="Project 2" image="/public/projects/cpc.png" />


      </div>

        <div className="mt-6 text-3xl font-bold">
          [ All | Web | Networking | School Projects ]
        </div>

    </main>
  );
}