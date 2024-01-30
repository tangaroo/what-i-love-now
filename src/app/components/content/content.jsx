import Link from "next/link";
import data from "../../data.json";
import Image from "next/image";

const Content = ({ selected }) => {
  const listofImages =
    selected === "all"
      ? data
      : data.filter((data) => data.type.includes(selected));

  return listofImages.map((data) => (
    <div key={`${data.id}-${data.title}`} className="block my-12 sm:my-6 relative">
      <Link href="/[index]" as={`/object/${data.id}`}>
        <div className="relative w-full object-contain aspect-square bg-slate-100 transition-all duration-150 hover:bg-[#EDF1F7]">
          <Image
            className="cursor-pointer object-contain w-full h-full transition-all duration-150 hover:translate-y-1 p-12"
            fill={true}
            src={data.url}
            alt={data.alt}
            sizes="100%"
          />
          {data.type.includes("want") && (
            <div className="absolute top-2 right-2 bg-slate-600 text-white text-xs px-2 py-1 rounded">
              ✦ Wishlist
            </div>
          )}
        </div>
      </Link>
      <div className="block gap-2">
        <div className="flex justify-between mt-4">
          <p className="text-sm text-slate-800">{data.title}</p>
          <p className="text-sm text-slate-800">{data.id}</p>
        </div>
        <p className="text-sm text-gray-400 pb-4">{data.description}</p>
      </div>
    </div>
  ));
};

export default Content;