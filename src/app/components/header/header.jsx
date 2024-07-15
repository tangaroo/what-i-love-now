import { useState } from "react";
import data from "../../../app/data.json";

export default function Header({ selected, setSelected }) {
  const [isOpen, setIsOpen] = useState(false);

  const total = data.reduce((acc, item) => {
    item.type.forEach(type => {
      if (acc[type]) {
        acc[type]++;
      } else {
        (acc[type]) = 1
      }
    });
    return acc;
  }, {})

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

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 start-0 z-50 w-full bg-slate-50 flex justify-between items-center md:py-8 md:px-12 sm:py-6 sm:px-6">
      <h1 className="flex gap-4 text-lg items-center md:mb-0">
        {logo} What I love now
      </h1>
      <div className="relative">
        <button
          onClick={toggleMenu}
          className="rounded-md bg-slate-100 py-2 px-4 text-sm text-slate-900 hover:bg-slate-200"
        >
          Filter
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg transition-transform transform ease-out duration-200">
            <button
              className={`${
                selected === "all" ? "text-slate-900" : "text-slate-400"
              } block w-full text-left px-4 py-2 text-sm hover:bg-slate-100 hover:text-slate-800`}
              onClick={() => {
                setSelected("all");
                toggleMenu();
              }}
            >
              All <span className="px-2 py-0.5 ml-2 rounded-lg bg-slate-100 text-xs">{total.all || 0}</span>
            </button>
            <button
              className={`${
                selected === "books" ? "text-slate-900" : "text-slate-400"
              } block w-full text-left px-4 py-2 text-sm hover:bg-slate-100 hover:text-slate-800`}
              onClick={() => {
                setSelected("books");
                toggleMenu();
              }}
            >
              Library <span className="px-2 py-0.5 ml-2 rounded-lg bg-slate-100 text-xs">{total.books || 0}</span>
            </button>
            <button
              className={`${
                selected === "wardrobe" ? "text-slate-900" : "text-slate-400"
              } block w-full text-left px-4 py-2 text-sm hover:bg-slate-100 hover:text-slate-800`}
              onClick={() => {
                setSelected("wardrobe");
                toggleMenu();
              }}
            >
              Wardrobe <span className="px-2 py-0.5 ml-2 rounded-lg bg-slate-100 text-xs">{total.wardrobe || 0}</span>
            </button>
            <button
              className={`${
                selected === "work" ? "text-slate-900" : "text-slate-400"
              } block w-full text-left px-4 py-2 text-sm hover:bg-slate-100 hover:text-slate-800`}
              onClick={() => {
                setSelected("work");
                toggleMenu();
              }}
            >
              Work <span className="px-2 py-0.5 ml-2 rounded-lg bg-slate-100 text-xs">{total.work || 0}</span>
            </button>
            <button
              className={`${
                selected === "home" ? "text-slate-900" : "text-slate-400"
              } block w-full text-left px-4 py-2 text-sm hover:bg-slate-100 hover:text-slate-800`}
              onClick={() => {
                setSelected("home");
                toggleMenu();
              }}
            >
              Home <span className="px-2 py-0.5 ml-2 rounded-lg bg-slate-100 text-xs">{total.home || 0}</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
