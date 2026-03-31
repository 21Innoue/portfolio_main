import BlogCard from "@/components/blog/BlogCard";
import SideBar from "@/components/blog/SideBar";

const blogPosts = [
  {
    title: "Designing cleaner user interfaces with less visual noise",
    excerpt:
      "A quick look at using spacing, hierarchy, and restrained borders to create layouts that feel structured without losing personality.",
    href: "#",
  },
  {
    title: "How I approach building portfolio pages that feel intentional",
    excerpt:
      "From content blocks to simple call-to-actions, this post covers the small design decisions that make a portfolio feel more polished.",
    href: "#",
  },
];

const categories = ["UI Notes", "Development", "Portfolio"];
const recentPosts = [
  "Designing cleaner user interfaces",
  "Building intentional portfolio pages",
  "Keeping layouts simple and readable",
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="mb-8 border-b border-black/15 pb-4 text-center dark:border-white/15">
          <p className="text-2xl font-medium tracking-[0.22em] text-foreground/75">
            [ My Blog ]
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              {blogPosts.map((post) => (
                <BlogCard
                  key={post.title}
                  title={post.title}
                  excerpt={post.excerpt}
                  href={post.href}
                />
              ))}
            </div>
          </div>

          <SideBar categories={categories} recentPosts={recentPosts} />
        </div>
      </section>
    </main>
  );
}
