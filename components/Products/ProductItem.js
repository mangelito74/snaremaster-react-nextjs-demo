import Link from "next/link";

import { useStore } from "../../store/custom-hooks/store";

import Card from "../UI/Card";

import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const { id, name, image, price } = props;
  const dispatch = useStore(false)[1];
  const state = useStore()[0];
  const isFavorite = state.favoriteIds.filter((fid) => fid === id).length > 0;

  const addToCartHandler = () => {
    //TODO
    alert("TODO: Add to cart!");
  };

  const toggleFavoritesHandler = () => {
    dispatch("TOGGLE_FAVORITE", id);
  };

  return (
    <li>
      <Card>
        <div className={classes["items-container"]}>
          <Link href={"/products/" + id} className={classes.link}>
            <div className={classes.image}>
              <img src={image} alt={name} />
            </div>
            <h3>{name}</h3>
            <div>
              <b>Price: ${price.toFixed(2)}</b>
            </div>
          </Link>
          <div className={classes.actions}>
            <button onClick={addToCartHandler}>Add to Cart</button>
            <button
              className={isFavorite ? classes.favorite : null}
              onClick={toggleFavoritesHandler}
            >
              {isFavorite ? "Un-Favorite" : "Add to Favorites"}
            </button>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
