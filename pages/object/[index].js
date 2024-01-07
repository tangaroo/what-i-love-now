import ObjectDetails from "../../src/app/components/object-details/object-details";
import data from "../../src/app/data.json";
import "../../src/app/globals.css";

const ObjectPage = ({ data }) => {
  if (!data) {
    return <p>Information not found</p>;
  }

  return <ObjectDetails data={data} />;
};

export async function getStaticPaths() {
  const paths = data.map((item) => ({
    params: { index: item.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const index = params.index;
  const cardData = data.find((item) => item.id === index);

  return {
    props: { data: cardData },
  };
}

export default ObjectPage;
