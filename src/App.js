import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

import Layout from "./hoc/Layout/Layout";
import { Checkout } from "./containers/Checkout/Checkout";
import { BurgerBuilder } from "./containers/Burger-Builder/Burger-Builder";


function App() {
  return (
    <div >
      <Layout>
        <Switch>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </Layout>
    </div >
  );
}

export default App;
