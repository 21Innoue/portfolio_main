export interface SideBarProps {
  categories: string[];
  recentPosts: string[];
}

function SideBarSection({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="space-y-3">
      <div className="flex items-center gap-3">
        <span className="text-xs uppercase tracking-[0.28em] text-foreground/60">
          {title}
        </span>
        <div className="h-px flex-1 bg-black/15 dark:bg-white/15" />
      </div>

      {items.length > 0 ? (
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={`${title}-${item}`}
              className="border-b border-black/10 pb-2 text-sm leading-6 text-foreground/80 last:border-b-0 last:pb-0 dark:border-white/10"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-foreground/55">No items available.</p>
      )}
    </section>
  );
}

export default function SideBar({
  categories,
  recentPosts,
}: SideBarProps) {
  return (
    <aside className="h-fit rounded-sm border border-black/20 bg-background/70 p-5 text-foreground shadow-sm backdrop-blur-sm dark:border-white/20">
      <div className="space-y-5">
        <div className="border-b border-black/15 pb-3 dark:border-white/15">
          <p className="text-[11px] uppercase tracking-[0.32em] text-foreground/60">
            Sidebar
          </p>
        </div>

        <SideBarSection title="Categories" items={categories} />

        <div className="h-px bg-black/10 dark:bg-white/10" />

        <SideBarSection title="Recent Posts" items={recentPosts} />
      </div>
    </aside>
  );
}