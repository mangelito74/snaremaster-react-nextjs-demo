import { Fragment } from "react";
import Head from "next/head";

import ProductDetails from "../../components/products/ProductDetails";

const ProductDetailsPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.product.name}</title>
        <meta name="description" content={props.product.description} />
      </Head>
      <ProductDetails
        image={props.product.image}
        name={props.product.name}
        description={props.product.description}
        price={props.product.price}
      />
    </Fragment>
  );
};

export async function getStaticPaths() {
  const environment = process.env.NEXT_JS_ENVIRONMENT;
  const url =
    environment === "development"
      ? "http://localhost:3000/api/products"
      : "https://snaremaster-react-demo.vercel.app/api/products";
  const response = await fetch(url, { method: "GET" });

  const data = await response.json();
  let products = data.map((product) => product.id);

  return {
    fallback: false,
    paths: products.map((id) => ({
      params: { productId: id },
    })),
  };
}

export async function getStaticProps(context) {
  const productId = context.params.productId;

  const environment = process.env.NEXT_JS_ENVIRONMENT;
  const url =
    environment === "development"
      ? "http://localhost:3000/api/products/" + productId
      : "https://snaremaster-react-demo.vercel.app/api/products/" + productId;
  const response = await fetch(url, { method: "GET" });

  const data = await response.json();

  return {
    props: {
      product: {
        id: data.id,
        name: data.name,
        description: data.description,
        image: data.image,
        price: data.price,
      },
    },
  };
}

export default ProductDetailsPage;
