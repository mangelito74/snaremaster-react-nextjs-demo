import { Fragment } from "react";
import Head from "next/head";

import { useStore } from "../store/custom-hooks/store";

import FavoritesList from "../components/Products/FavoritesList";

const FavoritesPage = (props) => {
  const state = useStore()[0];
  const favorites = props.products.filter(
    (product) => state.favoriteIds.indexOf(product.id) >= 0
  );

  const title = "SnareMaster | Favorites";

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>

      <FavoritesList favorites={favorites} />
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

export default FavoritesPage;
