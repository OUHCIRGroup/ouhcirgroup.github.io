import { labNewsByYear } from "@/data/news";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="mx-auto flex w-full max-w-6xl flex-col px-6 py-10 sm:px-10 lg:px-16">
        {/* ABOUT SECTION */}
        {/* <section
          id="about"
          className="grid w-full gap-10 scroll-mt-24 md:grid-cols-2 md:items-start"
        >
          <aside className="flex justify-center md:justify-start">
            <Image
              src="/hcir.png"
              alt="OU HCIR Lab"
              height={600}
              width={600}
              className="object-contain"
            />
          </aside>

          <section className="space-y-3 md:text-left text-justify">
            <p className="text-md leading-relaxed text-left text-zinc-700 dark:text-zinc-300">
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

            <p className="text-md leading-relaxed text-left text-zinc-700 dark:text-zinc-300">
              Our long-term research goal is to provide useful, timely, fair,
              and responsible information support for people from diverse
              backgrounds and communities. Our methods include computational
              approaches such as data/text mining, deep learning, and natural
              language processing, as well as qualitative, participatory, and
              user study research methods.
            </p>

            <p className="text-md leading-relaxed text-left text-zinc-700 dark:text-zinc-300">
              Topics of interest include user biases in information
              interactions, intelligent information retrieval, bias-aware
              recommender systems, and adaptive information system evaluation.
            </p>

            <p className="text-md leading-relaxed text-left text-zinc-700 dark:text-zinc-300">
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
        </section> */}
        <section
          id="about"
          className="grid w-full gap-10 scroll-mt-24 md:grid-cols-2 md:items-start"
        >
          <aside className="flex justify-center md:justify-start">
            <Image
              src="/hcir.png"
              alt="OU HCIR Lab"
              height={600}
              width={600}
              className="object-contain"
            />
          </aside>

          {/* Right column: first 2 paragraphs */}
          <section className="space-y-3 md:text-left text-justify">
            <p className="text-md leading-relaxed text-left text-zinc-700 dark:text-zinc-300">
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

            <p className="text-md leading-relaxed text-left text-zinc-700 dark:text-zinc-300">
              Our long-term research goal is to provide useful, timely, fair,
              and responsible information support for people from diverse
              backgrounds and communities. Our methods include computational
              approaches such as data/text mining, deep learning, and natural
              language processing, as well as qualitative, participatory, and
              user study research methods.
            </p>
          </section>

          {/* Full-width row below image + text: last 2 paragraphs */}
          <div className="md:col-span-2 md:row-start-2 space-y-3 -mt-2">
            <p className="text-md leading-relaxed text-left text-zinc-700 dark:text-zinc-300">
              Topics of interest include user biases in information
              interactions, intelligent information retrieval, bias-aware
              recommender systems, and adaptive information system evaluation.
            </p>

            <p className="text-md leading-relaxed text-left text-zinc-700 dark:text-zinc-300">
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
                <h3 className="text-md font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                  {year}
                </h3>
                <ul className="space-y-2 text-md leading-relaxed text-zinc-700 dark:text-zinc-300">
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

          <div className="mt-4 space-y-4 text-md leading-relaxed text-zinc-700 dark:text-zinc-300">
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

            <p className="text-md">
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
