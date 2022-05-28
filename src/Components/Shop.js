import React, { useContext } from "react";
import { ContextApp } from "../context";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
const Shop = () => {
  const { products, addToCart, addToWishlist } = useContext(ContextApp);

  return (
    <div>
      <div className="grid">
        {products.map((product) => {
          return (
            <main className="product" key={product.id}>
              <h1>{product.name}</h1>
              <h3>weight: {product.weight}kg</h3>
              <h3>₦{product.price}</h3>
              <div className="flex ">
                <button className="btn" onClick={() => addToCart(product)}>
                  <FaShoppingCart />
                </button>
                <button onClick={() => addToWishlist(product)} className="btn">
                  <FaHeart />
                </button>
              </div>
            </main>
          );
        })}
      </div>
    </div>
  );
};
export default Shop;
