// components/Footer.tsx

export default function Footer() {
    return (
      <footer className="mt-20 border-t py-6 text-center bg-white dark:bg-black transition-colors">
  
        {/* Top Row (Mockup Style) */}
        <div className="mb-3 text-sm text-gray-600 dark:text-gray-400">
          Contact Info | Email | Media
        </div>
  
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-3 text-mb">
  
          <a
            href="#"
            className="hover:underline hover:scale-105 transition"
          >
            GitHub
          </a>
  
          <a
            href="#"
            className="hover:underline hover:scale-105 transition"
          >
            LinkedIn
          </a>
  
          <a
            href="#"
            className="hover:underline hover:scale-105 transition"
          >
            Email
          </a>
  
        </div>
  
        {/* Copyright */}
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Luke Hijara. All rights reserved.
        </p>
  
      </footer>
    );
  }