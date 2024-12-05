import React from "react";
import { Link } from "react-router-dom";
import LayOut from "../../components/LayOut/LayOut";
import logo from "../../components/carousel/img/logo.png";
import "./auth.css";
function Auth() {
  return (
    <LayOut>
      <div className="logo">
        <Link to="/">
          {/* https://pngimg.com/d/amazon_PNG11.png */}
          <img src={logo} alt="amazon logo" width="150" height={50} />
        </Link>
      </div>
      <form action="#">
        <h1>Sign-in</h1>
        <label for="email">E-mail</label>
        <br />
        <input type="email" />
        <br />
        <label for="password">Password</label>
        <br />
        <input type="password" />
        <br />

        <button className="signIn">Sign in</button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ab sint
          nemo possimus.
        </p>
        <button>Create your Amazon Account</button>
      </form>
    </LayOut>
  );
}

export default Auth;
