import React from "react";
import { Switch, Route } from "react-router-dom";

import Auth from "./components/auth/Auth";
import AddBook from "./components/addbook/AddBook";
import BookDetails from "./components/bookdetails/BookDetails";
import Bookshelf from "./components/bookshelf/Bookshelf";
import Browsing from "./components/browsing/Browsing";
import Cart from "./components/cart/Cart";
import EditBook from "./components/editbook/EditBook";

export default (
  <Switch>
    <Route component={Auth} path="/" exact />
    <Route component={AddBook} path="/addbook" />
    <Route component={BookDetails} path="/bookdetails:id" />
    <Route component={Bookshelf} path="/bookshelf" />
    <Route component={Browsing} path="/browsing" />
    <Route component={Cart} path="/cart" />
  </Switch>
);
