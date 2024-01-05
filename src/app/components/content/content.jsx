import data from "../../data.json";

export default function Content({ selected }) {
  const listofImages =
    selected === "all"
      ? data
      : data.filter((data) => data.type.includes(selected));

  return listofImages.map((data) => {
    return (
      <div className="block my-12 sm:my-6">
        <div className="padding-6 flex content-center items-center aspect-square bg-slate-100">
          <img
            className="object-contain aspect-square"
            key={data.index}
            src={data.url}
            alt={data.alt}
            loading="lazy"
          />
        </div>
        <div className="block gap-2">
          <div className="flex justify-between mt-4">
            <p className="text-sm text-slate-800">{data.title}</p>
            <p className="text-sm text-slate-800">{data.index}</p>
          </div>
          <p className="text-sm text-gray-400">{data.description}</p>
        </div>
      </div>
    );
  });
}
