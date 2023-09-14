import { Fragment } from "react";
import Head from "next/head";

import ProductList from "../components/Products/ProductList.js";

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
  const environment = process.env.NEXT_JS_ENVIRONMENT;
  const url =
    environment === "development"
      ? "http://localhost:3000/api/products"
      : "https://snaremaster-react-demo.vercel.app/api/products";

  const response = await fetch(url, { method: "GET" });
  const data = await response.json();

  return {
    props: {
      products: data,
    },
  };
}

export default HomePage;
