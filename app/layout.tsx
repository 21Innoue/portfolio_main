import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";

export const metadata = {
  title: "My Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-black text-black dark:text-white transition-colors">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
      </body>
    </html>
  );
}
