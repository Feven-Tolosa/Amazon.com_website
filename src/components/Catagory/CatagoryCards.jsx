import React from "react";
import classes from "./catagory.module.css";
import { Link } from "react-router-dom";
function CatagoryCards({ data }) {
  // console.log(data);
  return (
    <div className={classes.caragory}>
      <Link to={`/catagory/${data.name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.img} alt="" />
        <p>shoping know</p>
      </Link>
    </div>
  );
}

export default CatagoryCards;
