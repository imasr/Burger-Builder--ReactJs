import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.scss";

import Layout from "./hoc/Layout/Layout";
import { Checkout } from "./containers/Checkout/Checkout";
import { BurgerBuilder } from "./containers/Burger-Builder/Burger-Builder";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" exact element={<BurgerBuilder />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
