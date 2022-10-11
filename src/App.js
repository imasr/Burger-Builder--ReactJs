import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.scss";

import Layout from "./core/Layout/Layout";
// import { Checkout } from "./pages/Checkout/Checkout";
// import { BurgerBuilder } from "./pages/Burger-Builder/Burger-Builder";
// import { Login } from "./pages/Login/Login";
import Protected from "./Protected";

const LazyBurgerBuilder = React.lazy(() =>
  import("./pages/Burger-Builder/Burger-Builder")
);
const LazyCheckout = lazy(() => import("./pages/Checkout/Checkout"));
const LazyLogin = lazy(() => import("./pages/Login/Login"));

function App() {
  return (
    <Suspense fallback="Loading...">
      <Layout>
        <Routes>
          <Route
            path="/"
            exact
            element={<Protected Component={LazyBurgerBuilder} />}
          />
          <Route
            path="/checkout"
            element={<Protected Component={LazyCheckout} />}
          />
          <Route path="/login" element={<LazyLogin />} />
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;
