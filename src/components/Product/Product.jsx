import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";
import Loder from "../Loder/Loder";
function Product() {
  const [products, setproducts] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    setisLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setproducts(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loder />
      ) : (
        <section className={classes.products_container}>
          {products?.map((sing) => {
            return <ProductCard data={sing} key={sing.id} renderAdd={true} />;
          })}
        </section>
      )}
    </>
  );
}

export default Product;
