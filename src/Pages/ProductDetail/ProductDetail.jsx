import React, { useEffect, useState } from "react";
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../components/Product/ProductCard";
import Loder from "../../components/Loder/Loder";
function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${productUrl}/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <LayOut>
      {isLoading ? (
        <Loder />
      ) : (
        <ProductCard
          data={product}
          flex={true}
          renderDesc={true}
          key={product.id}
        />
      )}
    </LayOut>
  );
}

export default ProductDetail;
