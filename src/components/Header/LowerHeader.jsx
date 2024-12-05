import React from "react";
import classes from "./Header.module.css";
import { AiOutlineMenu } from "react-icons/ai";
function LowerHeader() {
  return (
    <div className={classes.lower_container}>
      <ul>
        <li>
          <AiOutlineMenu />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Costumer service</li>
        <li>Registery</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader;
