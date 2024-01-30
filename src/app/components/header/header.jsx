export default function Header({ selected, setSelected }) {
  const logo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
    >
      <path d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z" />
    </svg>
  );

  return (
    <header className="fixed top-0 start-0 z-50 w-full bg-slate-50 md:flex md:flex-row md:justify-between md:py-8 md:px-12 sm:flex-col sm:py-6 sm:px-8 sm:justify-start ">
      <h1 className="flex gap-4 text-lg items-center md:mb-0 sm:mb-4">
        {logo} What I love now{" "}
      </h1>
      <div className="flex items-center gap-x-2 text-base">
        <button
          className={`${
            selected === "all"
              ? "active bg-inherit text-slate-900 text-sm"
              : "hover:bg-inherit hover:text-slate-800 text-slate-400 text-sm"
          } rounded-md py-1 px-4 sm:pl-1 sm:pr-4`}
          onClick={() => setSelected("all")}
        >
          All
        </button>

        <button
          className={`${
            selected === "wardrobe"
              ? "active bg-inherit text-slate-900 text-sm"
              : "hover:bg-inherit hover:text-slate-800 text-slate-400 text-sm"
          } rounded-md py-1 px-4`}
          onClick={() => setSelected("wardrobe")}
        >
          Wardrobe
        </button>

        <button
          className={`${
            selected === "work"
              ? "active bg-inherit text-slate-900 text-sm"
              : "hover:bg-inherit hover:text-slate-800 text-slate-400 text-sm"
          } rounded-md py-1 px-4`}
          onClick={() => setSelected("work")}
        >
          Work
        </button>

        <button
          className={`${
            selected === "home"
              ? "active bg-inherit text-slate-900 text-sm"
              : "hover:bg-inherit hover:text-slate-800 text-slate-400 text-sm"
          } rounded-md py-1 px-4`}
          onClick={() => setSelected("home")}
        >
          Home
        </button>

      </div>
    </header>
  );
}
