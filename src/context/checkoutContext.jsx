import { createContext } from "react";
import axios from "axios";

export let CheckoutInfo = createContext();

export default function CheckoutInfoProvider(props) {
  let headers = {
    token: localStorage.getItem("UserToken"),
  };

  function PaymentCart(cartId, url, formData) {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`,
        { shippingAddress: formData },
        { headers }
      )
      .then((res) => res)
      .catch((res) => res);
  }

  return (
    <CheckoutInfo.Provider value={{ PaymentCart }}>
      {props.children}
    </CheckoutInfo.Provider>
  );
}
