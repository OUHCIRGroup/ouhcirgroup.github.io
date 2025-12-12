import Image from "next/image";
import Link from "next/link";
import { peopleSections } from "@/data/people";

export default function PeoplePage() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-6 lg:px-6 lg:py-8">
        {/* Page heading */}
        <header className="mb-8 sm:mb-10">
          <h1 className="text-left text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Our Team
          </h1>
        </header>

        {/* Sections */}
        <div className="space-y-10 sm:space-y-12">
          {peopleSections.map((section, sectionIdx) => (
            <section
              key={section.id}
              className={
                sectionIdx === 0
                  ? ""
                  : "border-t border-zinc-200 pt-6 dark:border-zinc-800"
              }
            >
              {/* Section header */}
              <div className="mb-4 flex items-baseline justify-between gap-3 sm:mb-6">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                    {section.title}
                  </p>
                </div>
              </div>

              {/* Cards */}
              <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                {section.people.map((person) => {
                  const isLongTextSection =
                    section.id === "faculty" || section.id === "phd";

                  const cardBase =
                    "rounded-2xl border border-zinc-200 bg-white/90 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/70";

                  // Faculty & PhD: centered, vertical layout with rounded portraits
                  if (isLongTextSection) {
                    return (
                      <article
                        key={person.id}
                        className={`${cardBase} flex flex-col items-center px-5 pb-5 pt-6`}
                      >
                        {person.image && (
                          <div className="mb-4 flex justify-center">
                            <div className="relative h-40 w-40 overflow-hidden rounded-full border border-zinc-200 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800">
                              <Image
                                src={person.image}
                                alt={person.name}
                                fill
                                sizes="160px"
                                className="object-cover"
                              />
                            </div>
                          </div>
                        )}

                        <div className="w-full space-y-2 text-center">
                          <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                            {person.website ? (
                              <Link href={person.website} target="_blank">
                                {person.name}
                              </Link>
                            ) : (
                              person.name
                            )}
                          </h3>

                          {/* Role + period + affiliation */}
                          <div className="space-y-1 text-xs text-gray-500 dark:text-gray-400">
                            <div className="flex flex-wrap justify-center gap-2">
                              {person.role && (
                                <span className="inline-flex items-center rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                                  {person.role}
                                </span>
                              )}
                              {person.period && (
                                <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                                  {person.period}
                                </span>
                              )}
                            </div>
                            {person.affiliation && (
                              <p className="text-xs text-zinc-600 dark:text-zinc-300">
                                {person.affiliation}
                              </p>
                            )}
                          </div>

                          {person.description && (
                            <p className="mt-3 text-xs text-justify leading-relaxed text-gray-600 dark:text-gray-300">
                              {person.description}
                            </p>
                          )}

                          {person.keywords && (
                            <p className="mt-2 text-[11px] uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                              {person.keywords}
                            </p>
                          )}
                        </div>
                      </article>
                    );
                  }

                  return (
                    <article
                      key={person.id}
                      className={`${cardBase} flex items-stretch gap-0 overflow-hidden`}
                    >
                      {person.image && (
                        <div className="relative hidden h-full w-36 shrink-0 sm:block">
                          <Image
                            src={person.image}
                            alt={person.name}
                            fill
                            sizes="144px"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      )}

                      <div className="flex-1 p-4 sm:p-5">
                        <h3 className="text-base font-semibold tracking-tight text-gray-900 dark:text-white sm:text-lg">
                          {person.website ? (
                            <Link href={person.website} target="_blank">
                              {person.name}
                            </Link>
                          ) : (
                            person.name
                          )}
                        </h3>

                        <div className="mt-1 space-y-1 text-xs text-gray-500 dark:text-gray-400">
                          <div className="flex flex-wrap items-center gap-2">
                            {person.role && (
                              <span className="inline-flex items-center rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                                {person.role}
                              </span>
                            )}
                            {person.period && (
                              <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                                {person.period}
                              </span>
                            )}
                          </div>

                          {person.affiliation && (
                            <p className="text-xs text-zinc-600 dark:text-zinc-300">
                              {person.affiliation}
                            </p>
                          )}
                        </div>

                        {person.description && (
                          <p className="mt-3 text-xs leading-relaxed text-gray-600 dark:text-gray-300">
                            {person.description}
                          </p>
                        )}

                        {person.keywords && (
                          <p className="mt-2 text-[11px] uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                            {person.keywords}
                          </p>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
