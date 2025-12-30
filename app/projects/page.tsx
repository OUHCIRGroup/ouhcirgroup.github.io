import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6 py-4 sm:px-10 lg:px-16">
        {/* Page heading */}
        <div className="mb-6 text-left sm:mb-8">
          <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Research Projects
          </h1>
        </div>

        <div className="space-y-6">
          {projects.map((project, idx) => (
            <article
              key={project.id}
              className={[
                "flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white/80 p-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/70 sm:flex-row sm:p-5",
                idx > 0 ? "mt-1" : "",
              ].join(" ")}
            >
              {/* Image */}
              {project.image && (
                <div className="sm:w-1/3">
                  <div className="relative h-44 w-full overflow-hidden border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 sm:h-60">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              )}

              {/* Text */}
              <div className="flex-1 space-y-2">
                {project.id === "imls" ? (
                  <Link href={`/projects/${project.id}`}>
                    <h2 className="text-lg font-semibold leading-snug text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                      {project.title}
                    </h2>
                  </Link>
                ) : (
                  <h2 className="text-lg font-semibold leading-snug text-gray-900 dark:text-white">
                    {project.title}
                  </h2>
                )}

                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                  {project.description}
                </p>

                {project.links && project.links.length > 0 && (
                  <div className="pt-1">
                    <div className="flex flex-wrap gap-2">
                      {project.links.map((link) => (
                        <Link
                          key={`${project.id}-${link.label}`}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center rounded-full border border-zinc-200 px-2.5 py-0.5 text-xs font-medium text-blue-600 hover:bg-blue-50 dark:border-zinc-700 dark:text-blue-300 dark:hover:bg-zinc-800"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
