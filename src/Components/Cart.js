import React, { useContext } from "react";
import { ContextApp } from "../context";
function Cart() {
  const { cart, removeItem, increase, decrease, clearCart } =
    useContext(ContextApp);
  const unique = [...new Set(cart)];
  if (unique.length === 0) {
    return <h1>No Item in the cart</h1>;
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "1px auto",
                    width: "20%",
                  }}>
                  <button onClick={() => increase(item.id)}>+</button>
                  <h3>{Number(item.quantity)}</h3>
                  <button onClick={() => decrease(item.id)}>-</button>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  style={{ padding: "5px 10px", margin: "5px auto" }}>
                  X
                </button>
              </main>
            );
          })}
        </main>
        <div className="btn" style={{ width: "30%", margin: "1px auto" }}>
          <button
            onClick={clearCart}
            style={{ padding: "7px 20px", width: "100%" }}>
            Clear Cart
          </button>
        </div>
        <div
          className="checkout"
          style={{ width: "30%", margin: "5rem auto", alignText: "center" }}>
          <h2>Summary</h2>
          <div>
            {cart.map((pro) => {
              const { price, quantity } = pro;
              console.log(price, quantity);
              return (
                <div>
                  <main
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottom: "1px solid black",
                    }}>
                    <div className="right">
                      <p>{pro.name}</p>
                      <p>Qty: {pro.quantity}</p>
                    </div>
                    <h5>₦{price * quantity}</h5>
                  </main>
                </div>
              );
            })}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}>
              <h4>Total</h4>
              <h4>₦2000</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
