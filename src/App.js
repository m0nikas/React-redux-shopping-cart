import React from "react";

import Footer from "./components/atoms/Footer/footer";
import Header from "./components/atoms/Header/header";
import ProductListing from "./components/products";
import Productd from "./components/productd";
import Cart from "./components/cart";

import store from './store';

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
          <Header />
          <Switch>
            <main>
              <Route path="/products" component={ProductListing} />
              <Route path="/product/:id" component={Productd} exact={true}/>
              <Route path="/cart" component={Cart} exact={true}/>
            </main>
          </Switch>
          <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;