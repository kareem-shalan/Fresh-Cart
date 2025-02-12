import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CheckoutInfoProvider } from "./context/checkoutContext";
import OredrscontextProvider from "./context/ordersContext";
import { AddCartContextProvider } from "./context/addCartContext";

ReactDOM.render(
  <BrowserRouter>
    <CheckoutInfoProvider>
      <OredrscontextProvider>
        <AddCartContextProvider>
          <App />
        </AddCartContextProvider>
      </OredrscontextProvider>
    </CheckoutInfoProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
