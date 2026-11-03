import { Brain, Bot, ShieldCheck, Users } from "lucide-react";

export default function ResearchAreasPage() {
  const areas = [
    {
      id: "human-cognition-ai",
      icon: Brain,
      title: "Human Cognition, Judgment, and AI",
      description:
        "Investigating bounded rationality, cognitive biases, heuristics, and vulnerabilities in human interactions with information systems and AI.",
    },
    {
      id: "generative-agentic-systems",
      icon: Bot,
      title: "Generative and Agentic Information Systems",
      description:
        "Developing and evaluating conversational search, intelligent recommendation, personalized AI agents, and systems that support complex information seeking and decision-making.",
    },
    {
      id: "human-centered-ai-evaluation",
      icon: ShieldCheck,
      title: "Human-Centered AI Evaluation and Auditing",
      description:
        "Studying model reliability, LLM-based judgments, cognitive and algorithmic bias, explainability, and evaluation methods that account for human behavior and decision outcomes.",
    },
    {
      id: "digital-resilience-ai-literacy",
      icon: Users,
      title: "Digital Resilience and Community AI Literacy",
      description:
        "Designing and evaluating AI-assisted learning experiences and interventions that improve information literacy, responsible AI use, and equitable access to technology.",
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
        <div className="grid gap-6 sm:grid-cols-2">
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
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {area.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
