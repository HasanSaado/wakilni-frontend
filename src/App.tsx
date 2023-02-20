// Libraries                                                                                                                                                                                                                     
import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { store } from "stores/rootStore";
import { Provider } from "react-redux";

// Pages
import LoginPage from 'pages/login';
// import Dashboard from 'pages/dashboard';
// import AddEmployee from 'pages/add-employee';

// Style
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles.scss';

// Route
import PrivateRoute from 'routes/PrivateRoute';

function App() {

  /**
   * 
   */
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<LoginPage />}
          />
          {/* <Route
            path="/dashboard"
            element={<PrivateRoute redirectTo={"/"}>
              <Dashboard />
            </PrivateRoute>}
          />
          <Route
            path="/add-employee"
            element={<PrivateRoute redirectTo={"/"}>
              <AddEmployee />
            </PrivateRoute>}
          /> */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;