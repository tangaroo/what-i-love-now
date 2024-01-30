export default function Footer() {
  return (
    <div className="flex flex-row items-start justify-between w-full px-8 pt-12 sm:flex-col sm:px-0 sm:pb-4">
  <p className="text-sm text-slate-500">
        Built with{" "}
        <a
          className="hover:text-slate-600"
          href="https://nextjs.org/"
          target="_blank"
        >
          Next.js{" "}
        </a>
        and{" "}
        <a
          className="hover:text-slate-800"
          href="https://tailwindcss.com/"
          target="_blank"
        >
          Tailwind
        </a>
      </p>
      <p className="text-sm text-slate-500 mt-0 sm:mt-2">
        Say hello @{" "}
        <a className="hover:text-slate-800" href="https://cassandratang.me">
          cassandratang.me
        </a>
      </p>
    </div>
  );
}
