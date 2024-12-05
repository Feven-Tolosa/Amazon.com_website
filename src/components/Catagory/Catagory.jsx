import React from "react";
import { catagoryFiles } from "./catagoryFiles";
import CatagoryCards from "./catagoryCards";
import classes from "./catagory.module.css";
function Catagory() {
  return (
    <div className={classes.catagory_container}>
      {catagoryFiles.map((imgInf) => (
        <CatagoryCards data={imgInf} />
      ))}
    </div>
  );
}

export default Catagory;
