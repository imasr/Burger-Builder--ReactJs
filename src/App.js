import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.scss";

import Layout from "./core/Layout/Layout";
import { Checkout } from "./pages/Checkout/Checkout";
import { BurgerBuilder } from "./pages/Burger-Builder/Burger-Builder";
import { Login } from "./pages/Login/Login";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" exact element={<BurgerBuilder />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
