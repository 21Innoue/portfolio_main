"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio Contact from ${name || "Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:your@email.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-[var(--background)] px-6 py-16 text-[var(--foreground)]">
      <section className="mx-auto flex w-full max-w-4xl flex-col items-center">
        <h1 className="mb-8 text-center text-3xl font-bold tracking-tight">
          Contact Section
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl border-2 border-black bg-[var(--background)] p-4 shadow-[6px_6px_0_rgba(0,0,0,0.18)] dark:border-white/40 dark:shadow-[6px_6px_0_rgba(255,255,255,0.08)]"
        >
          <div className="grid gap-4 md:grid-cols-[1fr_1.2fr]">
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="[ Name Field ]"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                className="w-full border-2 border-black bg-transparent px-3 py-2 text-sm outline-none transition focus:border-black dark:border-white/40 dark:focus:border-white"
              />

              <input
                type="email"
                placeholder="[ Email Field ]"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="w-full border-2 border-black/55 bg-transparent px-3 py-2 text-sm outline-none transition focus:border-black dark:border-white/40 dark:focus:border-white"
              />

              <textarea
                placeholder="[ Message Box ]"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
                rows={6}
                className="w-full resize-none border-2 border-black bg-transparent px-3 py-2 text-sm outline-none transition focus:border-black dark:border-white/40 dark:focus:border-white"
              />
            </div>

            <div className="flex flex-col justify-between gap-3">
              <div className="min-h-[170px] border-2 border-black bg-black/5 dark:border-white/40 dark:bg-white/5" />

              <button
                type="submit"
                className="w-full border border-black bg-black px-4 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-[4px_4px_0_rgba(0,0,0,0.16)] dark:border-white dark:bg-white dark:text-black dark:hover:shadow-[4px_4px_0_rgba(255,255,255,0.12)]"
              >
                [ Send Message Button ]
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}
