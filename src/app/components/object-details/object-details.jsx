import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Footer from "../footer/footer";


//This is for dynamic routes. For modal content, refer to content.

export const metadata = {
  title: "What I love now",
  description: "A collection carefully curated by Cassandra Tang",
};


const ObjectDetails = ({ data }) => {
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
    <main className="flex min-h-screen flex-col items-center justify-between pt-16 bg-slate-50 sm:pt-8">
      <Head>
        <title>{metadata.title} - {data.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <header className="flex flex-col md:flex-row md:items-center md:justify-between md:max-w-screen-lg w-full sm:flex-col md:px-8 sm:px-4 sm:justify-start">
        <Link className="text-sm" href="/">
          <h1 className="flex gap-4 text-lg items-center md:mb-0 sm:mb-4">
            {logo} What I love now{" "}
          </h1>
        </Link>
      </header>
      <div className="lg:gap-x-12 lg:gap-y-2 lg:w-full bg-slate-50 lg:max-w-screen-lg m-auto md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-2 md:px-8 sm:grid-cols-1 sm:px-4">
        <div className="padding-6 flex content-center items-center aspect-square bg-slate-100 lg:mb-0 sm:mb-6">
<div className="relative w-full object-contain aspect-square bg-slate-100 transition-all duration-150 hover:bg-[#EDF1F7]">
          <Image
            className="object-contain w-full h-full transition-all duration-150 p-12"
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

        </div>
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-2xl font-bold text-slate-800">
            {data.id} / {data.title}
          </h2>
          <h3 className="text-lg text-slate-400 mb-6">{data.description}</h3>
          <p className="text-sm text-slate-800 mb-4">{data.body}</p>
          <p className="text-sm text-slate-400 mb-12">{data.notes}</p>
          <Link className="text-sm" href="/">
            <button
              type="button"
              class="py-2 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-slate-800 focus:z-10 focus:ring-1 focus:ring-gray-200 "
            >
              ← Back home
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ObjectDetails;
