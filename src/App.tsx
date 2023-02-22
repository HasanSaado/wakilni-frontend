// Libraries                                                                                                                                                                                                                     
import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { store } from "stores/rootStore";
import { Provider } from "react-redux";

// Pages
import LoginPage from 'pages/login';
import RegisterPage from 'pages/register';
import ProductsPage from 'pages/products';
import ItemsPage from 'pages/items';

// Style
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/js/src/collapse.js";
import 'styles.scss';

// Route
import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';
import { isEmpty } from 'lodash';

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<ProductsPage />} />
          </Route>
          <Route path="/items" element={<PrivateRoute />}>
            <Route path="/items/:productId" element={<ItemsPage />} />
          </Route>
          <Route path="login" element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route path="register" element={<PublicRoute />}>
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;