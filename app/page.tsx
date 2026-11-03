import { labNewsByYear } from "@/data/news";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="mx-auto flex w-full max-w-6xl flex-col px-6 py-4 sm:px-10 lg:px-16">
        <section
          id="about"
          className="grid w-full gap-10 scroll-mt-24 md:grid-cols-2 md:items-start"
        >
          <aside className="flex justify-center md:justify-start">
            <Image
              src="/hcir.png"
              alt="HCIR Lab research illustration: human cognition and AI systems"
              height={600}
              width={600}
              className="object-contain"
            />
          </aside>

          {/* Right column: first 2 paragraphs */}
          <section className="space-y-3 md:text-left text-justify">
            <p className="text-md leading-relaxed text-left text-zinc-700 dark:text-zinc-300">
              The{" "}
              <span className="font-bold">
                Human-Computer Interaction and Recommendation (HCIR) Lab
              </span>{" "}
              at the University of Wisconsin–Milwaukee&apos;s School of
              Information Studies investigates how people interact with
              information, search and recommendation systems, and artificial
              intelligence. Our research brings together information retrieval,
              human-computer interaction, cognitive psychology, and machine
              learning to understand and support human information seeking,
              judgment, and decision-making.
            </p>

            <p className="text-md leading-relaxed text-left text-zinc-700 dark:text-zinc-300">
              A central focus of our work is understanding how human cognitive
              limitations, biases, and heuristics interact with the capabilities
              and limitations of AI systems. We develop behavioral models,
              evaluation methods, experimental platforms, and interventions to
              make generative and agentic AI systems more reliable, equitable,
              and supportive of human judgment.
            </p>
          </section>

          {/* Full-width row below image + text: last 2 paragraphs */}
          <div className="md:col-span-2 md:row-start-2 space-y-3 -mt-2">
            <p className="text-md leading-relaxed text-left text-zinc-700 dark:text-zinc-300">
              Our research covers human-centered AI evaluation, conversational
              and generative information retrieval, cognitive vulnerability and
              digital resilience, AI-assisted decision-making, and responsible
              personalization. We combine computational modeling and machine
              learning with controlled experiments, human evaluation, and
              participatory research methods.
            </p>

            <p className="text-md leading-relaxed text-left text-zinc-700 dark:text-zinc-300">
              Founded in 2020, the HCIR Lab is directed by{" "}
              <Link
                className="font-bold text-blue-500"
                href="https://jiqunl.github.io/me/"
                target="_blank"
                rel="noreferrer"
              >
                Dr. Jiqun Liu
              </Link>
              , Associate Professor specializing in AI and Data Science in the
              School of Information Studies at the University of
              Wisconsin–Milwaukee. The lab was originally established at the
              University of Oklahoma and transitioned to UWM in 2026.
            </p>
          </div>
        </section>

        {/* LAB NEWS */}
        <section
          id="lab-news"
          className="mt-12 border-t border-zinc-200 pt-8 scroll-mt-24 dark:border-zinc-800"
        >
          <h2 className="text-xl  font-bold tracking-tight text-blue-500">
            Lab News
          </h2>

          <div className="mt-6 space-y-8">
            {labNewsByYear.map(({ year, items }) => (
              <div key={year} className="space-y-3">
                <h3 className="text-md font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                  {year}
                </h3>
                {/* <ul className="space-y-2 text-md leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {items.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="mt-1.5 h-1.25 w-1.25 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul> */}
                <ul className="space-y-2 text-md leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {items.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="mt-1.5 h-1.25 w-1.25 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                      <span className="[&_a]:text-blue-600 [&_a]:underline [&_strong]:font-semibold">
                        <ReactMarkdown
                          components={{
                            p: ({ children }) => <>{children}</>,
                          }}
                        >
                          {item}
                        </ReactMarkdown>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* JOIN US */}
        <section
          id="join-us"
          className="mt-12 border-t border-zinc-200 pt-8 scroll-mt-24 dark:border-zinc-800"
        >
          <h2 className="text-xl font-bold tracking-tight text-blue-500">
            Join Us
          </h2>

          <div className="mt-4 space-y-4 text-md leading-relaxed text-zinc-700 dark:text-zinc-300">
            <p>
              We are actively looking for self-motivated students to join the
              lab and work on cutting-edge problems at the intersection of
              people, information, and AI. Research opportunities are available
              at both undergraduate and graduate levels. We are especially
              interested in students with backgrounds or interests in any of the
              following:
            </p>

            <ul className="space-y-2">
              <li className="list-disc pl-5">
                Human-Computer Interaction and Information Retrieval, including
                interactive search, conversational AI, and recommender systems;
              </li>
              <li className="list-disc pl-5">
                Machine Learning and Natural Language Processing (NLP),
                including large language model (LLM) evaluation and auditing;
              </li>
              <li className="list-disc pl-5">
                Behavioral experiments and user studies, drawing on cognitive
                psychology, behavioral economics, or quantitative and
                qualitative methods;
              </li>
              <li className="list-disc pl-5">
                Human-centered and responsible AI, including AI literacy,
                fairness, and the societal impacts of AI.
              </li>
            </ul>

            <p className="text-md">
              If you are interested, please email{" "}
              <a
                href="mailto:jiqunliu@uwm.edu"
                className="font-medium text-blue-600 underline-offset-2 hover:underline"
              >
                jiqunliu@uwm.edu
              </a>{" "}
              with your CV and a brief description of your previous research
              experiences and current research interests.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
