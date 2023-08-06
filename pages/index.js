import { Fragment } from "react";
import Head from "next/head";

import ProductList from "../components/products/ProductList.js";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>SnareMaster</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProductList products={props.products} />
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const response = await fetch("http://localhost:3000/api/products");
  const data = await response.json();

  return {
    props: {
      products: data,
    },
  };
}

export default HomePage;
