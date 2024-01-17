import { useRouter } from "next/router";
import PortfolioDetails from "../../components/PortfolioDetails";

export default function PortfolioItem() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <PortfolioDetails id={id} />
    </div>
  );
}

export async function getStaticPaths() {
  // Get list of all portfolio ids

  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;

  return {
    props: {
      id,
    },
  };
}
