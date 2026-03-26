import Image from "next/image";

export default function TATEPage() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6 py-4 space-y-10">
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
                alt="TATE project logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 text-justify">
              In TATE research conducted in our HCIR lab, we critically examine
              the foundation of existing user models and human-AI systems. We
              are committed to developing robust AI auditing and bias mitigation
              techniques, and we aim to foster sustainable human-AI
              collaborations. Our team also creates innovative programs and
              materials to train the next generation of researchers and
              technology leaders in the field of trustworthy AI. We envision a
              future where everyone can safely and inspiringly interact with AI
              systems that align with human ethics, contributing to a fair and
              healthy society supported by human-centered AI.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            On-Going Projects
          </h2>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
              AI Harm Measurements and Mitigation
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
              Human Vulnerability and Behavioral Manipulation of AI Systems
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
              Expectation Confirmation and Functional Fixedness in Human-AI
              Interaction
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
              Cognitive and Algorithmic Biases in Medical Information Retrieval
              and Evaluation
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
              Evaluation of Generative AI in Long-term Task Performance
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
