export interface BlogCardProps {
  title: string;
  excerpt: string;
  href?: string;
}

export default function BlogCard({
  title,
  excerpt,
  href = "#",
}: BlogCardProps) {
  return (
    <article className="flex h-full min-h-[20rem] flex-col border border-black/20 bg-background/80 p-6 text-foreground shadow-sm backdrop-blur-sm transition-colors duration-200 dark:border-white/20">
      <div className="mb-4 flex items-center text-[0.7rem] font-medium uppercase tracking-[0.25em] text-foreground/70">
        <span className="mr-2 text-foreground/50">[</span>
        <span>Article</span>
        <span className="ml-2 text-foreground/50">]</span>
      </div>

      <h2 className="text-xl font-semibold leading-tight tracking-tight sm:text-2xl">
        {title}
      </h2>

      <div className="my-5 h-px w-full bg-black/15 dark:bg-white/15" />

      <p className="flex-1 text-sm leading-7 text-foreground/75 sm:text-[0.95rem]">
        {excerpt}
      </p>

      <a
        href={href}
        className="mt-6 inline-flex w-fit items-center justify-center border border-black/25 bg-transparent px-4 py-2 text-sm font-medium tracking-wide text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-black/40 hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:border-white/25 dark:hover:border-white/40 dark:hover:bg-white/5"
        aria-label={`Read more about ${title}`}
      >
        Read More
      </a>
    </article>
  );
}