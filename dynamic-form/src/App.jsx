import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import FormPage from "./components/FormPage";
import CheckoutPage from "./components/CheckoutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
