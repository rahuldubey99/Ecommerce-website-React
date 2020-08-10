import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import ProductsContextProvider from './Global/ProductsContext';
import Products from './component/Products';
import {  Switch, Route } from 'react-router';
import Cart from './component/Cart';
import NotFound from './component/NotFound';
import { BrowserRouter as Router } from 'react-router-dom';
import CartContextProvider from './Global/CartContext';

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
      <CartContextProvider>
      <Router>

      <Navbar/>
      
      <Switch>
      <Route exact path="/" component={Products}/>
      <Route exact path="/cart" component={Cart}/>
      <Route component={NotFound}/>
        </Switch>
        </Router>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
