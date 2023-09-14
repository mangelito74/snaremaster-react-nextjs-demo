import Card from "../UI/Card";
import FavoriteItem from "./FavoriteItem";

import classes from "./FavoritesList.module.css";

const FavoritesList = (props) => {
  return (
    <Card>
      <div className={classes.container}>
        <h1>Favorites</h1>

        <ul>
          {props.favorites.map((favorite) => (
            <FavoriteItem
              key={favorite.id}
              id={favorite.id}
              image={favorite.image}
              name={favorite.name}
              description={favorite.description}
              price={favorite.price}
            />
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default FavoritesList;
