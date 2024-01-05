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
    <header className="flex flex-col md:flex-row md:items-center md:justify-between md:max-w-screen-lg w-full sm:flex-col md:px-8 sm:px-4 sm:justify-start">
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
            selected === "wear"
              ? "active bg-inherit text-slate-900 text-sm"
              : "hover:bg-inherit hover:text-slate-800 text-slate-400 text-sm"
          } rounded-md py-1 px-4`}
          onClick={() => setSelected("wear")}
        >
          Wear
        </button>

        <button
          className={`${
            selected === "use"
              ? "active bg-inherit text-slate-900 text-sm"
              : "hover:bg-inherit hover:text-slate-800 text-slate-400 text-sm"
          } rounded-md py-1 px-4`}
          onClick={() => setSelected("use")}
        >
          Use
        </button>

        <button
          className={`${
            selected === "see"
              ? "active bg-inherit text-slate-900 text-sm"
              : "hover:bg-inherit hover:text-slate-800 text-slate-400 text-sm"
          } rounded-md py-1 px-4`}
          onClick={() => setSelected("see")}
        >
          See
        </button>
      </div>
    </header>
  );
}
