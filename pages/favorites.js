import { Fragment } from "react";
import Head from "next/head";

import FavoritesList from "../components/Products/FavoritesList"

const FavoritesPage = (props) => {
  const title = "SnareMaster | Favorites";

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>

      <FavoritesList favorites={props.favorites} />
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
  const favorites = data.filter((p) => p.favorite == true);

  return {
    props: {
      favorites: favorites,
    },
  };
}

export default FavoritesPage;
