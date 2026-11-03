import Image from "next/image";
import Link from "next/link";
import { Brain, ShieldCheck, Bot, GraduationCap } from "lucide-react";

const themes = [
  {
    id: "cognitive-vulnerability",
    icon: Brain,
    title: "Cognitive Vulnerability and Human Judgment",
    description:
      "Understanding how framing, anchoring, primacy effects, functional fixedness, and other cognitive shortcuts influence human–AI interactions.",
  },
  {
    id: "ai-auditing",
    icon: ShieldCheck,
    title: "AI Auditing, Reliability, and Bias Mitigation",
    description:
      "Developing benchmarks, controlled experiments, and auditing methods for identifying unreliable or biased AI judgments and interactions.",
  },
  {
    id: "agentic-ai",
    icon: Bot,
    title: "Agentic AI, Personalization, and Human Agency",
    description:
      "Examining how AI agents learn from interaction histories, retain user preferences, and potentially reinforce narrow choices or behavioral patterns over time.",
  },
  {
    id: "ai-literacy",
    icon: GraduationCap,
    title: "AI Literacy, Learning, and Community Engagement",
    description:
      "Evaluating AI-supported education, library services, and accessible technologies that help individuals and communities develop informed and responsible AI practices.",
  },
];

const selectedPublications = [
  {
    authors: "Liu, J. (2026).",
    title:
      "Bounded Minds, Generative Machines: Envisioning Conversational AI that Works with Human Heuristics and Reduces Bias Risk.",
    venue: "Communications of the ACM.",
    url: "https://doi.org/10.1145/3790104",
  },
  {
    authors: "De Lima, V., Liu, J., & Yang, G. H. (2026).",
    title:
      "Stability Regimes for Framing-Sensitive Fine-Tuning in Language Models.",
    venue: "NeurIPS 2026 (accepted).",
    url: "https://arxiv.org/abs/2602.15273",
  },
  {
    authors: "Oh, P. S., Luo, Y., & Liu, J. (2026).",
    title:
      "Stuck on the First Answer? Auditing Primacy Bias in Multi-Turn LLM Preference Revision via Causal Masking.",
    venue: "ACM/IEEE JCDL 2026.",
    url: "https://doi.org/10.1145/3805696.3846485",
  },
  {
    authors: "He, J., & Liu, J. (2026).",
    title:
      "Not All Transparency Is Equal: Source Presentation Effects on Attention, Interaction, and Persuasion in Conversational Search.",
    venue: "ACM CHIIR 2026.",
    url: "https://doi.org/10.1145/3786304.3787874",
  },
  {
    authors:
      "Chen, N., Fang, H., Liu, J., Wei, W., Sakai, T., & Wu, X.-M. (2026).",
    title:
      "Mitigating the Threshold Priming Effect in Large Language Model-Based Relevance Judgments via Personality Simulation.",
    venue: "ACM WSDM 2026.",
    url: "https://doi.org/10.1145/3773966.3779384",
  },
  {
    authors: "Liu, J., & He, J. (2026).",
    title:
      "The Decoy Dilemma in Online Medical Information Evaluation: A Comparative Study of Credibility Assessments by LLM and Human Judges.",
    venue: "ACM Transactions on Interactive Intelligent Systems.",
    url: "https://doi.org/10.1145/3820166",
  },
];

export default function TATEPage() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6 py-4 space-y-10">
        {/* Overview */}
        <div className="space-y-4">
          <div>
            <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Trustworthy AI Technologies and Experiences (TATE)
            </h2>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="relative h-44 w-44">
              <Image
                src="/TATE.png"
                alt="TATE initiative logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 text-justify">
              Trustworthy AI Technologies and Experiences (TATE) is a research
              initiative within the HCIR Lab at the University of
              Wisconsin–Milwaukee. TATE investigates how people interact with
              increasingly capable AI systems, how cognitive limitations and
              algorithmic behavior may jointly shape human judgment, and how AI
              technologies can be designed and evaluated to support informed,
              equitable, and resilient decision-making.
            </p>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 text-justify">
              Our research integrates information retrieval, machine learning,
              human-computer interaction, behavioral science, and participatory
              methods. We seek to develop reproducible evaluation frameworks, AI
              auditing methods, and practical interventions that address
              cognitive vulnerability, unreliable AI assistance, and harmful
              patterns of personalization.
            </p>
          </div>
        </div>

        {/* Research Themes */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Research Themes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {themes.map((theme) => {
              const Icon = theme.icon;
              return (
                <article
                  key={theme.id}
                  className="rounded-2xl border border-zinc-200 bg-white/80 p-5 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/70"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-zinc-800 dark:text-blue-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-semibold leading-snug text-gray-900 dark:text-white sm:text-base">
                    {theme.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {theme.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Research Methods and Infrastructure */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Research Methods and Infrastructure
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 text-justify">
            TATE combines computational evaluation and behavioral research
            through experimental AI systems, benchmark datasets, controlled and
            longitudinal studies, and human-centered auditing. Open research
            infrastructure, including the{" "}
            <Link
              href="https://github.com/OUHCIRGroup/echo"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              ECHO platform
            </Link>
            , supports reproducibility and interdisciplinary collaboration.
          </p>
        </div>

        {/* Education and Community Engagement */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Education and Community Engagement
          </h2>
          <p className="inline-block rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 dark:bg-zinc-800 dark:text-amber-300">
            Proposed and developing activities
          </p>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 text-justify">
            TATE also seeks to connect research in computing and AI with
            socially meaningful applications. Potential activities include
            interdisciplinary student research, postdoctoral research
            opportunities, community-engaged technology capstones,
            public-facing workshops on responsible AI, and student research
            showcases. We aim to develop collaborations across SOIS, UWM&apos;s
            College of Community Engagement and Professions, and external
            community and industry partners.
          </p>
          <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">
            These activities are in development and are not currently funded
            programs. No postdoctoral positions are being advertised at this
            time.
          </p>
        </div>

        {/* Selected Publications */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Selected Publications
          </h2>
          <ul className="space-y-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            {selectedPublications.map((pub) => (
              <li key={pub.url} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                <span>
                  {pub.authors}{" "}
                  <Link
                    href={pub.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-400"
                  >
                    {pub.title}
                  </Link>{" "}
                  <span className="italic">{pub.venue}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
