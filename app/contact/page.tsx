export default function ContactPage() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6 py-4 space-y-10">
        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              HCIR Lab at UWM SOIS
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Research Collaboration
            </h2>
          </div>

          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 text-justify">
            The Human-Computer Interaction and Recommendation (HCIR) Lab is
            part of the School of Information Studies (SOIS) at the University
            of Wisconsin–Milwaukee. We welcome inquiries about research
            collaborations, student research opportunities, and partnerships
            with academic, library, community, and industry organizations in
            areas such as human-centered AI evaluation, conversational and
            generative information retrieval, cognitive biases in human–AI
            interaction, and AI literacy.
          </p>
        </div>

        <div>
          <div>
            <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Contact us
            </h2>
            <p className="mt-3 text-gray-500 dark:text-gray-400">
              Our lab team would love to hear from you.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
              {/* Email */}
              <div>
                <span className="inline-block rounded-full bg-blue-100/80 p-3 text-blue-500 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>

                <h3 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Email
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  For research, collaboration, or student opportunities.
                </p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                  <a href="mailto:jiqunliu@uwm.edu">jiqunliu@uwm.edu</a>
                </p>
              </div>

              {/* Phone */}
              <div>
                <span className="inline-block rounded-full bg-blue-100/80 p-3 text-blue-500 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>

                <h3 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Phone
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Dr. Jiqun Liu&apos;s work phone.
                </p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                  <a href="tel:+14142519069">+1 (414) 251-9069</a>
                </p>
              </div>

              {/* Office */}
              <div>
                <span className="inline-block rounded-full bg-blue-100/80 p-3 text-blue-500 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>

                <h3 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Location
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  School of Information Studies address.
                </p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                  School of Information Studies
                  <br />
                  University of Wisconsin–Milwaukee
                  <br />
                  Northwest Quadrant, Building D, 3rd Floor
                  <br />
                  2025 E. Newport Ave., Milwaukee, WI 53211
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="h-96 overflow-hidden rounded-lg lg:col-span-2 lg:h-auto">
              <iframe
                width="100%"
                height="100%"
                title="UWM School of Information Studies - Northwest Quadrant"
                src="https://www.google.com/maps?q=2025+E+Newport+Ave,+Milwaukee,+WI+53211&output=embed"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
