import { labNewsByYear } from "@/data/news";
import Image from "next/image";
import Link from "next/link";
import {
  getPublicationsByIds,
  recentPublicationIds,
} from "@/data/publications";

export default function Home() {
  const recentPublications = getPublicationsByIds(recentPublicationIds);

  return (
    <div className="font-sans">
      <main className="mx-auto flex w-full max-w-6xl flex-col px-6 py-10 sm:px-10 lg:px-16">
        {/* ABOUT SECTION */}
        <section
          id="about"
          className="grid w-full gap-10 scroll-mt-24 md:grid-cols-2 md:items-start"
        >
          <aside className="flex justify-center md:justify-start">
            <Image
              src="/hcir_logo.jpg"
              alt="OU HCIR Lab"
              height={600}
              width={600}
              className="object-contain"
            />
          </aside>

          <section className="space-y-3 md:text-left text-justify">
            <p className="text-sm leading-relaxed text-justify text-zinc-700 dark:text-zinc-300">
              At the{" "}
              <span className="font-bold">
                OU Human-Computer Interaction and Recommendation
              </span>{" "}
              (HCIR) Lab, we are working toward modeling and supporting people’s
              problem-solving and decision-making activities with intelligent
              information search and recommender systems, and understanding the
              economic, societal, and ethical impacts of advanced search and
              recommendation algorithms.
            </p>

            <p className="text-sm leading-relaxed text-justify text-zinc-700 dark:text-zinc-300">
              Our long-term research goal is to provide useful, timely, fair,
              and responsible information support for people from diverse
              backgrounds and communities. Our methods include computational
              approaches such as data/text mining, deep learning, and natural
              language processing, as well as qualitative, participatory, and
              user study research methods.
            </p>

            <p className="text-sm leading-relaxed text-justify text-zinc-700 dark:text-zinc-300">
              Topics of interest include user biases in information
              interactions, intelligent information retrieval, bias-aware
              recommender systems, and adaptive information system evaluation.
            </p>

            <p className="text-sm leading-relaxed text-justify text-zinc-700 dark:text-zinc-300">
              The Principal Investigator,{" "}
              <Link
                className="font-bold text-blue-500"
                href="https://jiqunl.github.io/me/"
                target="_blank"
                rel="noreferrer"
              >
                Dr. Jiqun Liu
              </Link>
              , started this lab in 2020. Dr. Liu is an interdisciplinary
              information science researcher by training, with research
              interests, including information retrieval, recommender system,
              bounded rationality, and ethics in human-computer interaction.
            </p>
          </section>
        </section>
        {/* Recent Publications */}
        <section
          id="publications"
          className="mt-12 border-t border-zinc-200 pt-8 scroll-mt-24 dark:border-zinc-800"
        >
          <div className="flex items-baseline justify-between gap-2">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                Recent Publications
              </h2>
            </div>

            <Link
              href="/publications"
              className="mt-1 inline-flex items-center text-xs font-medium text-blue-600 underline-offset-2 hover:underline dark:text-blue-300"
            >
              View all publications
            </Link>
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-200 bg-white/80 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/70">
            <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {recentPublications.map((pub) => (
                <li key={pub.id} className="px-4 py-4 sm:px-5 sm:py-4">
                  <div className="space-y-1.5">
                    {/* Title */}
                    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                      {pub.title}
                    </p>

                    {/* Authors + year */}
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">
                      {pub.authors}{" "}
                      <span className="text-zinc-500 dark:text-zinc-500">
                        · {pub.year}
                      </span>
                    </p>

                    {/* Venue */}
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">
                      {pub.venue}
                    </p>

                    {/* First link as small pill */}
                    {pub.links && pub.links[0] && (
                      <a
                        href={pub.links[0].url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-full border border-zinc-300 px-2.5 py-0.5 text-[11px] font-medium text-blue-700 hover:bg-blue-50 dark:border-zinc-600 dark:text-blue-300 dark:hover:bg-zinc-800"
                      >
                        {pub.links[0].label}
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* LAB NEWS */}
        <section
          id="lab-news"
          className="mt-12 border-t border-zinc-200 pt-8 scroll-mt-24 dark:border-zinc-800"
        >
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Lab News
          </h2>

          <div className="mt-6 space-y-8">
            {labNewsByYear.map(({ year, items }) => (
              <div key={year} className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                  {year}
                </h3>
                <ul className="space-y-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {items.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="mt-1.5 h-1.25 w-1.25 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                      <span>{item}</span>
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
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Join Us
          </h2>

          <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            <p>
              We are actively looking for self-motivated students to join the
              lab and work on interesting cutting-edge problems in HCIR-related
              topics. Research opportunities are available at both undergraduate
              and graduate levels. We are especially interested in students with
              any of the following backgrounds:
            </p>

            <ul className="space-y-2">
              <li className="list-disc pl-5">
                Human-Computer Interaction, Interactive Information
                Seeking/Retrieval, Cognitive Psychology or Experimental
                Economics using quantitative or qualitative methods (or both);
              </li>
              <li className="list-disc pl-5">
                Machine Learning, Natural Language Processing (NLP), or
                Text/Data Mining.
              </li>
            </ul>

            <p>
              If you are interested, please email{" "}
              <a
                href="mailto:jiqunliu@ou.edu"
                className="font-medium text-blue-600 underline-offset-2 hover:underline"
              >
                jiq‌unliu@ou.edu
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
