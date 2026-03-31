// app/about/page.tsx
import Image from "next/image";

const educationData = [
  {
    title: "Bachelor of Science in Information Technology",
    school: "Expected Graduation: 2028",
    description: "Focusing on software engineering principles, database management, and web architectures."
  },
  {
    title: "Senior High School Diploma",
    school: "Day-as National High School, 2022",
    description: "Specialized in Computer Programming and Information Technology basics."
  }
];

export default function AboutPage() {
  return (  
    <>
      
    <main className="max-w-4xl mx-auto p-10">
      <h1 className="text-3xl font-bold text-center mb-10">About Me</h1>

      <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
       
        <div className="flex-shrink-0">
          <Image
            src="/image.png"
            alt="Professional Portrait"
            width={192}
            height={192}
            className="w-48 h-48 rounded-2xl object-cover shadow-lg border-2 border-gray-100"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">
            Aspiring Full-Stack Developer
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-500">
            I am a dedicated IT student and Web Developer specializing in the 
            <strong> Modern Web Stack</strong>. My expertise lies in building 
            performant, SEO-friendly applications using <strong>Next.js</strong>, 
            <strong> React</strong>, and <strong>Tailwind CSS</strong>.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-500">
            Passionate about clean architecture and responsive design, I focus on 
            bridging the gap between complex backend logic and intuitive user 
            experiences. I thrive on solving technical challenges and am 
            constantly evolving my skills to stay at the forefront of web innovation.
          </p>
        </div>
      </div>

      <hr className="my-12 border-gray-200" />

      <section className="p-6">
        <h2 className="text-2xl font-bold mb-6">Experience & Education</h2>
        
        <div className="space-y-6">
          {educationData.map((edu, index) => {
            return (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-xl text-blue-600">{edu.title}</h3>
              <p className="text-gray-500 italic">{edu.school}</p>
              <p className="mt-2 text-gray-700 dark:text-gray-400">
                {edu.description}
              </p>
            </div>
            )
          })}
        </div>
      </section>
    </main>
    </>
  );
}
