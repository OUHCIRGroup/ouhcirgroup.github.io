import Image from "next/image";

export default function IMLSProjectPage() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-6 py-4 sm:px-10 lg:px-16">
        {/* Back link and IMLS logo on same line */}
        <div className="mb-2 flex items-center justify-between">
          {/* <Link
            href="/projects"
            className="inline-flex items-center text-sm text-blue-600 hover:underline dark:text-blue-400"
          >
            Back to Projects
          </Link> */}
          <Image
            src="/projects/imls_logo.png"
            alt="IMLS Logo"
            width={240}
            height={160}
            className="object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="mb-6 text-xl font-semibold  text-gray-900  sm:text-3xl">
          Gauging Library Needs for Integrating Generative AI into
          Children&apos;s Maker Based Learning
        </h1>

        {/* Project image */}
        <div className="relative mb-8 h-64 w-full overflow-hidden sm:h-80">
          <Image
            src="/projects/imls.jpg"
            alt="IMLS Project"
            fill
            className="object-contain"
          />
        </div>

        {/* Team info */}
        <div className="mb-8 rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-800">
          <p className="mb-1 text-sm text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Project Lead:</span> PI: Dr. Jiqun
            Liu; Co PI: Dr. Yong Ju Jung
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Graduate Students/Assistants:</span>{" "}
            Mahdieh Nazari, Harun Karahan, Nischal Dinesh
          </p>
        </div>

        {/* Project Introduction */}
        <div className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
            Project Introduction
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
            Public libraries play a vital role in supporting children&apos;s
            informal learning through hands on, creative, and community centered
            programs. Maker based activities in particular offer opportunities
            for young learners to explore problem solving, creativity, and
            technological thinking. At the same time, libraries face increasing
            pressure to respond to the rapid emergence of generative artificial
            intelligence, while navigating constraints related to staffing,
            ethics, and equitable access. This project examines how large
            language model enabled systems can be thoughtfully integrated into
            children&apos;s maker based learning in ways that strengthen, rather
            than replace, the educational role of library professionals.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
            This IMLS planning project (Award number: LG-257169-OLS)
            investigates how generative AI can support children&apos;s
            creativity, inquiry, and learning while aligning with the values of
            public libraries and the developmental needs of young learners. It
            centers on three research questions:
          </p>
          <ol className="mb-4 list-inside list-decimal space-y-2 text-sm text-gray-700 dark:text-gray-300 text-justify">
            <li>
              What needs, opportunities, and constraints do library
              professionals and families identify regarding the use of
              generative AI in children&apos;s maker based learning?
            </li>
            <li>
              How can LLM enabled systems be designed to support creative
              exploration, problem solving, and AI literacy in developmentally
              appropriate and ethically responsible ways?
            </li>
            <li>
              How can public libraries effectively adopt, govern, and sustain
              these technologies while preserving their educational missions and
              community trust?
            </li>
          </ol>
        </div>

        {/* Methodology */}
        <div className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
            Methodology
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
            The project employs a mixed methods, participatory research design
            conducted across multiple public libraries serving diverse
            communities. In the first phase, interviews and surveys with library
            professionals, children, and families will document existing maker
            practices, perceived challenges, and expectations surrounding AI
            supported learning. These findings will inform the design
            requirements and ethical considerations for subsequent phases.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
            In the second phase, the project will conduct participatory design
            workshops that bring together librarians, children, and researchers
            to co create concepts and low fidelity prototypes of AI supported
            maker activities. These sessions will explore how generative AI can
            assist with ideation, troubleshooting, reflection, and learning
            support while maintaining transparency, inclusivity, and age
            appropriate interaction. Training materials for library
            professionals will be developed in parallel to support responsible
            facilitation and oversight.
          </p>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
            The final phase will pilot selected prototypes in participating
            libraries. Data collected through observations, system logs, and
            interviews will be used to evaluate usability, learning value,
            ethical implications, and implementation feasibility. Findings will
            guide refinements to both the tools and the associated training
            resources.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
            Timeline
          </h2>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
            The project will run from September 2025 through August 2027. The
            first year will focus on needs assessment in libraries, stakeholder
            engagement, and foundational design work. The second year will
            emphasize participatory design, prototype development, pilot
            deployment in partner libraries, and systematic evaluation of
            outcomes. This phased timeline ensures that design decisions and
            evaluation activities are grounded in real world contexts and
            iteratively refined through evidence.
          </p>
        </div>

        {/* Expected Deliverables */}
        <div className="mb-8">
          <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
            Expected Deliverables
          </h2>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
            The project will produce several key outcomes. These include a
            comprehensive needs assessment documenting opportunities and
            challenges for integrating generative AI into children&apos;s maker
            based learning; a set of design guidelines and prototype tools co
            developed with library professionals and families; and practical
            training materials that support responsible and inclusive AI use in
            library settings. In addition, the project will generate empirical
            insights into how children, librarians, and communities interact
            with generative AI in informal learning environments. Together,
            these outputs will contribute actionable guidance for libraries
            nationwide, advance research on human centered and ethical AI in
            education, and establish a foundation for scalable, community
            informed approaches to AI supported learning and education for
            American youth.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
            Advisory Board
          </h2>
          <div className="flex flex-col gap-6">
            {/* Caroline Flory */}
            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-200 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-blue-600">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-zinc-100 shadow-inner dark:border-zinc-600">
                  <Image
                    src="/ab_members/Flory.jpeg"
                    alt="Caroline Flory"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Caroline Flory
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    Caroline works in Maker + STEAM services in a public
                    library. She has loved libraries since before she could
                    read, and she enjoys incorporating science and arts and her
                    background in kinesiology into accessible and creative
                    programs. When not at the library, Caroline loves spending
                    time with her kids (who love to read, too!) and her favorite
                    people, reading, hiking, exploring, learning, and music.
                  </p>
                </div>
              </div>
            </div>

            {/* Soo Hyeon Kim */}
            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-200 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-blue-600">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-zinc-100 shadow-inner dark:border-zinc-600">
                  <Image
                    src="/ab_members/Kim.jpeg"
                    alt="Soo Hyeon Kim"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Soo Hyeon Kim
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    Soo Hyeon Kim, Ph.D. is an Assistant Professor in the
                    Department of Library and Information Science at Indiana
                    University Indianapolis. Dr. Kim’s research spans across
                    library makerspace, maker-based STEM learning in public
                    libraries, and intergenerational participation. Her research
                    aims to broaden and support children’s STEM learning
                    opportunities by transforming public libraries and family
                    interactions as facilitators for tech-supported maker
                    experiences. She served as a principal investigator for
                    IMLS-funded Family Makers project that involved rural
                    librareis to co-design and implement engineering programs
                    and has widely published in the field of library and
                    information science and the learning sciences.
                  </p>
                </div>
              </div>
            </div>

            {/* Hyewon Park */}
            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-200 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-blue-600">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-zinc-100 shadow-inner dark:border-zinc-600">
                  <Image
                    src="/ab_members/Park.jpeg"
                    alt="Hyewon Park"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Hyewon Park
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    Hyewon Park, Ph.D., is a Research Data Analyst in the
                    Department of Public Health Sciences at the UC Davis and
                    affiliated with the Tobacco Control Evaluation Center (TCEC)
                    as an Evaluation Associate. She has worked with digitalLIFT,
                    a nonprofit organization that provides digital literacy
                    training for adults, as a researcher and a digital literacy
                    instructor. Her research focuses on digital literacy and
                    healthy aging, AI literacy training, lifelong learning, and
                    evaluation for organizational learning. She is passionate
                    about supporting vulnerable communities and promoting
                    lifelong learning and empowerment through digital learning
                    initiatives. Hyewon earned her Ph.D. in Lifelong Learning
                    and Adult Education from Pennsylvania State University.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
