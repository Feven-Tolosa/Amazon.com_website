import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth";
import Cart from "./Pages/Cart/Cart";
import Order from "./Pages/Order/Order";
import Payment from "./Pages/Payment/Payment";
import PaymentDetail from "./Pages/ProductDetail/ProductDetail";
import Result from "./Pages/Results/Results";
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/Orde" element={<Order />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Products/:productId" element={<PaymentDetail />} />
        <Route path="/catagory/:catagoryName" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default Routing;
