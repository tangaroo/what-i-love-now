import Link from "next/link";
import data from "../../data.json";
import Image from "next/image";

const Content = ({ selected }) => {
  const listofImages =
    selected === "all"
      ? data
      : data.filter((data) => data.type.includes(selected));

  return listofImages.map((data) => (
    <div key={data.id} className="block my-12 sm:my-6">
      <Link href="/[index]" as={`/object/${data.id}`}>
        <div className="flex content-center items-center">
          <div className="relative w-full object-contain h-full padding-6 aspect-square bg-slate-100 transition-property: all; transition-duration: 150ms; hover:bg-[#EDF1F7]">
        <Image className="transition-all transition-duration:150ms hover:translate-y-1"
        fill={true}	
        src={data.url}
        alt={data.alt}
        sizes="100%"
        />
        </div>
        </div>
        <div className="block gap-2">
          <div className="flex justify-between mt-4">
            <p className="text-sm text-slate-800">{data.title}</p>
            <p className="text-sm text-slate-800">{data.id}</p>
          </div>
          <p className="text-sm text-gray-400">{data.description}</p>
        </div>
      </Link>
    </div>
  ));
};

export default Content;
