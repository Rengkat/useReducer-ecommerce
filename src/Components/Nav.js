import React, { useContext } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ContextApp } from "../context";
function Nav() {
  const { cart, wishlist } = useContext(ContextApp);
  return (
    <div className="nav">
      <nav>
        <h1>useReducer</h1>
        <div className="icons">
          <div style={{ marginTop: "7px" }}>
            <Link
              to="/shop"
              style={{
                color: "black",
                textDecoration: "none",
                backgroundColor: "white",
                padding: "5px 10px",
                borderRadius: "7px",
                fontWeight: "bolder",
              }}>
              Shop
            </Link>
          </div>
          <div>
            <Link to="/cart">
              <FaShoppingCart fontSize={30} className="fontAws" />
              <div className="box">
                <h3>{cart.length}</h3>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/wishlist">
              <FaHeart fontSize={30} className="fontAws" />
              <div className="box">
                <h3>{wishlist.length}</h3>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
