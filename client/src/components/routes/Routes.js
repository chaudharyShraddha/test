import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import AddProducts from '../pages/Addproducts';
import Cart from '../pages/Cart';

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/add" component={AddProducts} exact />
        <Route path="/cart" component={Cart} exact />
      </Switch>
    </section>
  );
};

export default Routes;
