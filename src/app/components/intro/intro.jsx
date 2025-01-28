export default function Intro() {
  return (
    <div className="md:grid md:grid-cols-2 md:py-20 md:max-w-screen-lg md:px-8 md:pt-32 sm:grid-cols-1 sm:px-4 sm:pt-32">
      <div>
        <p className="text-sm text-slate-800 mb-2">
          Dieter Rams’ once said, <i>“Good design makes a product useful”</i>.
        </p>
        <p className="text-sm text-slate-800">
          I'm 30. What I love now is a simple inventory of 30 curated everyday items that
          I currently love and use (or want) in my daily life as a designer.
        </p>
        <p className="text-sm pt-8 text-slate-800">
          Carefully curated by{" "}
          <a
            className="hover:text-slate-500"
            href="https://cassandratang.com"
            target="_blank"
          >
            Cassandra Tang
          </a>
        </p>
      </div>
    </div>
  );
}
