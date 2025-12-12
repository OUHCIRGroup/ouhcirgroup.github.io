export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50 py-6 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-black dark:text-zinc-400">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
        <div>
          <p>© {year} OUHCIR Lab. All rights reserved.</p>
        </div>
        <div className="text-xs sm:text-sm">
          <p>
            Bizzell Library, Room 120, University of Oklahoma, 401 West Brooks,
            Norman, OK 73019
          </p>
        </div>
      </div>
    </footer>
  );
}
