import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6 py-4 space-y-10">
        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              HCIR Lab at OU SLIS
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Physical Lab Space
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="relative h-40 overflow-hidden  border-gray-200 dark:border-gray-700 sm:h-44 md:h-52">
              <Image
                src="/lab/1.jpg"
                alt="HCIR lab space – participant and researcher desks"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-40 overflow-hidden  border-gray-200 dark:border-gray-700 sm:h-44 md:h-52">
              <Image
                src="/lab/2.jpg"
                alt="HCIR lab space – divider and experimental setup"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-40 overflow-hidden  border-gray-200 dark:border-gray-700 sm:h-44 md:h-52">
              <Image
                src="/lab/3.jpg"
                alt="HCIR lab space – meeting and waiting area"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 text-justify">
            PI Liu and project team build a new Human-Computer Interaction and
            Recommendation (HCIR) lab, with a physical space at the Bizzell
            Memorial Library (School of Library and Information Studies), for
            running user study sessions and facilitating in-person group
            meetings among team members. The lab has two desktop computers (one
            for the participant, one for the observer/researcher, with a panel
            dividing the two separate workplaces), with the data collection and
            experimental systems installed. The lab also provides a separate
            area for small-group meeting, consent and instruction form
            preparation, and participants who are waiting for their sessions. To
            protect participants under the COVID pandemic, the lab also offers
            personal protective supplies, including medical masks and hand
            sanitizers. Beyond the scope of this project, we expect to use the
            lab for supporting future user studies in evaluating IR and
            recommender systems and also for facilitating students’ learning and
            training about the procedure and tools related to user studies.
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
                  <a href="mailto:jiqunliu@ou.edu">jiqunliu@ou.edu</a>
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
                  Mon–Fri, 8:00 AM – 5:00 PM (CST).
                </p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                  +1 (405) 325-3921
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
                  Office
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Come say hello at our lab space.
                </p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                  Bizzell Library, Room 120,
                  <br />
                  University of Oklahoma
                  <br />
                  401 West Brooks, Norman, OK 73019
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="h-96 overflow-hidden rounded-lg lg:col-span-2 lg:h-auto">
              <iframe
                width="100%"
                height="100%"
                title="OU HCIR Lab Location - Bizzell Memorial Library"
                src="https://www.google.com/maps?q=Bizzell+Memorial+Library+Norman+OK&output=embed"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
