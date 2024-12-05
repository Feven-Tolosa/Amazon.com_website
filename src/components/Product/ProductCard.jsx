import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { DataContext, useStateValue } from "../DataProvidor/DataProvider";
function ProductCard({ data, flex, renderDesc }) {
  const { image, title, id, price, rating, description } = data;
  // dispatch = action
  const [state, dispatch] = useStateValue();
  // console.log(basket);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        image,
        title,
        rating,
        price,
        description,
      },
    });
    console.log(state);
  };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <Link to={`/products/${data.id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{truncate(title, 25)}</h3>
        {renderDesc && <div style={{ maxWidth: "650px" }}>{description}</div>}
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating?.rate} position={0.1} />
          {/* {rating.rate} */}
          {/* counting */}
          <small>{rating?.count}</small>
          {/* {rating.count} */}
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>

        <button className={classes.button} onClick={addToCart}>
          add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
