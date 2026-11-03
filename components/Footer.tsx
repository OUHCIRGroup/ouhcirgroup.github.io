export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50 py-6 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-black dark:text-zinc-400">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
        <div>
          <p>© {year} HCIR Lab, University of Wisconsin–Milwaukee. All rights reserved.</p>
        </div>
        <div className="text-xs sm:text-sm">
          <p>School of Information Studies, University of Wisconsin–Milwaukee</p>
          <p>
            Northwest Quadrant, Building D, 3rd Floor, 2025 E. Newport Ave.,
            Milwaukee, WI 53211
          </p>
        </div>
      </div>
    </footer>
  );
}
