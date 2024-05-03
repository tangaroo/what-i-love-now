import Head from "next/head";

export default function SEO({ title, description, image, url }) {
  const seo = {
    title: title || "What I love now",
    description:
      description || "A list of curated objects that I currently love and the stories behind them",
    image: image || "/siteimage.jpg",
    url: url || "https://what-i-love-now.vercel.app/",
  };
  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"></meta>
    </Head>
  );
}
