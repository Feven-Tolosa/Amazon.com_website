import React, { useEffect, useInsertionEffect, useState } from "react";
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../components/Product/ProductCard";
import Classes from "./Results.module.css";
import Loder from "../../components/Loder/Loder";
function Results() {
  const [results, setResults] = useState([]);
  const { catagoryName } = useParams();
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${productUrl}/category/${catagoryName}`)
      .then((res) => {
        console.log(res);
        setResults(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  }, []);

  return (
    <LayOut>
      {isLoading ? (
        <Loder />
      ) : (
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "10px 30px" }}>Catagory / {catagoryName}</p>
          <hr />
          {console.log(results)}
          <div className={Classes.products_container}>
            {results?.map((product) => {
              return (
                <ProductCard data={product} key={product.id} renderAdd={true} />
              );
            })}
          </div>
        </section>
      )}
    </LayOut>
  );
}

export default Results;
