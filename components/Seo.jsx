import Head from "next/head";

const Seo = ({ pageTitle }) => {
  return (
    <Head>
      <title>{pageTitle && `${pageTitle} || Manish Personal Portfolio`}</title>
    </Head>
  );
};

export default Seo;
