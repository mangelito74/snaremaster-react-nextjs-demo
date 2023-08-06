import Card from "../ui/Card";

import classes from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  return (
    <Card>
      <div className={classes.details}>
        <img src={props.image} alt={props.name} />
        <div>
          <h1>{props.name}</h1>
          <p>{props.description}</p>
          <p>
            <b>${props.price.toFixed(2)}</b>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ProductDetails;
