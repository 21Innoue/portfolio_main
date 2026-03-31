import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 py-20 px-6">
    
      <div className="relative w-40 h-40">
        <Image 
          src="/image.png" 
          alt="Professional Profile" 
          width={160} 
          height={160} 
          className="rounded-full object-cover shadow-lg"
        />
      </div>

      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-500 transition-colors">
          Hi, I am Luke
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed transition-colors">
          A passionate Full-Stack Developer dedicated to building 
          high-performance, user-centric web applications. I specialize in 
          React, Next.js, and TypeScript, turning complex problems into 
          elegant, scalable code.
        </p>
      </div>
    </section>
  );
}
