type BannerProps = {
  title: string;
};

export default function Banner({ title }: BannerProps) {
  return (
    <section
      className={[
        "sticky top-0 z-50",
        "relative  bg-white/90 px-6 py-2 shadow-sm backdrop-blur",
      ].join(" ")}
    >
      {/* blue-purple-ish glow */}
      {/* <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -right-28 h-72 w-72 rounded-full bg-linear-to-br from-blue-500/25 via-violet-500/25 to-fuchsia-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-linear-to-tr from-blue-500/20 via-purple-500/20 to-indigo-500/15 blur-3xl"
      /> */}

      <div className="relative">
        <h2 className=" text-center bg-linear-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent sm:text-3xl">
          {title}
        </h2>
      </div>
    </section>
  );
}
