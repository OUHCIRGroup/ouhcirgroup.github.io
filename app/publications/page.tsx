"use client";

import { useState } from "react";
import Link from "next/link";
import { publicationsByYear } from "@/data/publications";

type PubFilter = "all" | "journal" | "conference";

export default function PublicationsPage() {
  const [filter, setFilter] = useState<PubFilter>("all");

  const filteredByYear = publicationsByYear
    .map(({ year, items }) => ({
      year,
      items:
        filter === "all" ? items : items.filter((pub) => pub.type === filter),
    }))
    .filter(({ items }) => items.length > 0);

  const totalCount = filteredByYear.reduce(
    (acc, section) => acc + section.items.length,
    0
  );

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6 py-4 sm:px-10 lg:px-16">
        {/* Page heading */}
        <div className="mb-6 text-left sm:mb-8">
          <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Publications
          </h1>
        </div>

        {/* Filter + stats */}
        <div className="mb-6 flex flex-col items-center justify-between gap-3 sm:mb-8 sm:flex-row">
          <div className="inline-flex rounded-full border border-zinc-200 bg-zinc-50 p-1 text-xs shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
            {(
              [
                { value: "all", label: "All" },
                { value: "journal", label: "Journal" },
                { value: "conference", label: "Conference" },
              ] as { value: PubFilter; label: string }[]
            ).map((opt) => {
              const active = filter === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setFilter(opt.value)}
                  className={[
                    "rounded-full px-3 py-1 transition",
                    active
                      ? "bg-blue-600 text-white shadow-sm dark:bg-blue-500"
                      : "text-zinc-700 hover:bg-white dark:text-zinc-200 dark:hover:bg-zinc-800",
                  ].join(" ")}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>

          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            Showing{" "}
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">
              {totalCount}
            </span>{" "}
            publications
            {filter !== "all" && (
              <>
                {" "}
                · filter: <span className="capitalize">{filter}</span>
              </>
            )}
          </p>
        </div>

        {filteredByYear.length > 0 && (
          <nav className="mb-8 flex flex-wrap justify-center gap-3 text-xs text-gray-600 dark:text-gray-400">
            {filteredByYear.map(({ year }, idx) => (
              <span key={year} className="flex items-center gap-3">
                {idx > 0 && (
                  <span className="hidden text-gray-300 sm:inline-block">
                    |
                  </span>
                )}
                <a
                  href={`#p${year}`}
                  className="rounded-full border border-transparent px-2 py-1 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-300"
                >
                  {year}
                </a>
              </span>
            ))}
          </nav>
        )}

        {filteredByYear.length === 0 && (
          <div className="mt-10 rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-6 text-center text-sm text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
            No publications found for this filter yet.
          </div>
        )}

        <div className="space-y-10">
          {filteredByYear.map(({ year, items }) => (
            <section
              key={year}
              id={`p${year}`}
              className="scroll-mt-24 border-t border-zinc-200 pt-6 dark:border-zinc-800"
            >
              <h2 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {year}
              </h2>

              <div className="space-y-4 rounded-2xl border border-zinc-200 bg-white/80 p-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/70 sm:p-5">
                {items.map((pub) => (
                  <article
                    key={pub.id}
                    className="border-l border-zinc-200 pl-4 dark:border-zinc-700"
                  >
                    <div className="flex flex-wrap items-start gap-2">
                      {/* Type badge with fixed width */}
                      <span className="inline-flex h-6 min-w-22.5 items-center justify-center rounded-full bg-zinc-100 px-2 text-[11px] font-medium uppercase tracking-wide text-zinc-600 whitespace-nowrap dark:bg-zinc-800 dark:text-zinc-300">
                        {pub.type === "journal"
                          ? "Journal"
                          : pub.type === "conference"
                          ? "Conference"
                          : pub.type === "book"
                          ? "Book"
                          : "Other"}
                      </span>

                      <div className="flex-1 space-y-1 text-sm leading-relaxed">
                        <p className="text-zinc-900 dark:text-zinc-50">
                          {pub.authors} ({pub.year}).{" "}
                          <span className="font-medium italic">
                            {pub.title}
                          </span>{" "}
                          <span className="text-zinc-700 dark:text-zinc-200">
                            {pub.venue}
                          </span>
                        </p>

                        {pub.extra && (
                          <p className="text-xs font-medium text-amber-700 dark:text-amber-300">
                            {pub.extra}
                          </p>
                        )}

                        {pub.links && pub.links.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-1">
                            {pub.links.map((link) => (
                              <Link
                                key={`${pub.id}-${link.label}`}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center rounded-full border border-zinc-200 px-2.5 py-0.5 text-xs text-blue-600 hover:bg-blue-50 dark:border-zinc-700 dark:text-blue-300 dark:hover:bg-zinc-800"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
