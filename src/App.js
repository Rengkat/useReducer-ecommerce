import React, { useState, useReducer } from "react";
import Cart from "../src/Components/Cart";
import Wishlist from "./Components/Wishlist";
import { Route, Routes } from "react-router-dom";
import Shop from "./Components/Shop";

import Nav from "./Components/Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="rount">
        <Routes>
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/wishlist" element={<Wishlist />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
