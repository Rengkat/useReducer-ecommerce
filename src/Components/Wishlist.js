import React, { useContext } from "react";
import { ContextApp } from "../context";
function Wishlist() {
  const { wishlist, clearWishlist } = useContext(ContextApp);
  const unique = [...new Set(wishlist)];
  if (unique.length === 0) {
    return <h1>No Item in your wishlist</h1>;
  } else {
    return (
      <div>
        <main className="cart">
          {unique.map((item) => {
            return (
              <main className="product" key={item.id}>
                <h1>{item.name}</h1>
                <h3>weight: {item.weight}kg</h3>
                <h3>₦{item.price}</h3>
              </main>
            );
          })}
        </main>
        <div className="btn" style={{ width: "30%", margin: "1px auto" }}>
          <button
            onClick={clearWishlist}
            style={{ padding: "7px 20px", width: "100%" }}>
            Clear Cart
          </button>
        </div>
      </div>
    );
  }
}

export default Wishlist;
