import { Brain, Cpu, Atom } from "lucide-react";

export default function ResearchAreasPage() {
  const areas = [
    {
      id: "cognitive-psychology-ir",
      icon: Brain,
      title: "Cognitive Psychology + Information Retrieval",
    },
    {
      id: "ml-ir",
      icon: Cpu,
      title: "Machine Learning + Information Retrieval",
    },
    {
      id: "state-aware-adaptive-ir",
      icon: Atom,
      title: "State-Aware Adaptive IR Systems",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6 py-4 sm:px-10 lg:px-16">
        {/* Page heading */}
        <div className="mb-6 text-left sm:mb-8">
          <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Research Areas
          </h1>
        </div>

        {/* Area cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <article
                key={area.id}
                id={area.id}
                className="scroll-mt-24 rounded-2xl border border-zinc-200 bg-white/80 p-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900/70 sm:p-6"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-zinc-800 dark:text-blue-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="text-sm font-semibold leading-snug text-gray-900 dark:text-white sm:text-base">
                  {area.title}
                </h2>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
