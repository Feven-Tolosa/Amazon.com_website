import React, { useContext } from "react";
import LayOut from "../../components/LayOut/LayOut";
import ProductCard from "../../components/Product/ProductCard";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import "./cart.css";
function Cart() {
  return (
    <LayOut>
      <div className="container">
        <div className="cart_container">
          <h2>Hello</h2>
          <h3>Your's shoping basket</h3>
          <hr />
        </div>
        <div className="subtotal">
          <div>
            <p>Subtotal: 0 items</p>
            <CurrencyFormat amount="total" />
          </div>
          <span>
            <input type="checkbox" />
            <small>This order contains a gift</small>
          </span>
          <br />
          <Link to="/Payment">Continue to checkout</Link>
        </div>
      </div>
    </LayOut>
  );
}

export default Cart;

// function Cart() {
// const [{ basket, user, dispatch }] = useContext(StateContext);
// const total = basket.reducer((amount, item) => {
//   return item.price * item.amount + amount;
// }, 0);
//   return (
//     <LayOut>
//       <section className={classes.container}>
//         <div className={classes.cart_container}>
//           <h2>Hello</h2>
//           <h3>Your's shoping basket</h3>
//           <hr />
//           {/* {basket?.length == 0 ? (
//             <p>Opps ! No item in your cart</p>
//           ) : (
//             basket?.map((item, i) => {
//               return (
//                 <ProductCard
//                   data={item}
//                   flex={true}
//                   renderDesc={true}
//                   key={i}
//                   renderAdd={false}
//                 />
//               );
//             })
//           )} */}
//         </div>
//         <div>
//           {/* {basket?.length !== 0 && (
//             <div className={classes.subtotal}>
//               <div>
//                 <p>Subtotal ({basket?.length}items)</p>
//                 <CurrencyFormat amount="total" />
//               </div>
//               <span>
//                 <input type="checkbox" />
//                 <small>This order contains a gift</small>
//               </span>
//               <Link to="/payments">Continue to checkout</Link>
//             </div>
//           )} */}
//         </div>
//       </section>
//     </LayOut>
//   );
// }

// export default Cart;
