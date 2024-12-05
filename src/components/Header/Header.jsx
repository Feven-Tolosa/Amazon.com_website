import React, { useContext } from "react";
import { IoMdSearch } from "react-icons/io";
import { BiCart } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import classes from "./Header.module.css";
import LowerHeader from "./LowerHeader";
import logo from "../carousel/img/logo.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../DataProvidor/DataProvider";

function Header() {
  const [state, dispatch] = useStateValue();
  return (
    <>
      <section className={classes.fixed}>
        <div className={classes.header_container}>
          {/* logo section*/}
          <div className={classes.logo_container}>
            <Link to="/">
              {/* https://pngimg.com/d/amazon_PNG11.png */}
              <img src={logo} alt="amazon logo" />
            </Link>
            <div className={classes.delivery}>
              <span>
                <IoLocationOutline />
              </span>
              <div>
                <p>Deliever to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* search  section*/}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search product" />
            {/* icon */}
            <IoMdSearch size={25} />
          </div>
          {/* other section */}
          <div className={classes.order_container}>
            <Link to="" className={classes.language}>
              <img
                src="https://st.depositphotos.com/1164721/1561/v/950/depositphotos_15617463-stock-illustration-american-flag-for-independence-day.jpg"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>
            <Link to="/Auth">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </Link>
            {/* orders */}
            <Link to="/Orde">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to="/Cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{state.basket.length}</span>
            </Link>
          </div>
        </div>
        <LowerHeader />
      </section>
    </>
  );
}

export default Header;
