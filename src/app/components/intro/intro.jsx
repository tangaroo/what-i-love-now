export default function Intro() {
  return (
    <div className="md:grid md:grid-cols-2 md:py-16 md:max-w-screen-lg md:px-8 sm:grid-cols-1 sm:px-4 sm:py-0 sm:pt-12">
      <div>
        <p className="text-sm text-slate-800">
          What I love now is a simple site that contains 20 curated design items
          that I currently own and love. Dieter Rams’ once said,{" "}
          <i>“Good design makes a product useful”</i>. These objects are not
          only beautifully crafted, but they emphasise the quality and
          functionality of the product through sleek and simple design.
        </p>
        <p className="text-sm pt-8 text-slate-800">
          Carefully curated by{" "}
          <a
            className="hover:text-slate-500"
            href="https://cassandratang.me"
            target="_blank"
          >
            Cassandra Tang
          </a>
        </p>
      </div>
    </div>
  );
}
