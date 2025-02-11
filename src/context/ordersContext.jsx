import axios from "axios";
import { createContext, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export let Oredrscontext = createContext();

export default function OredrscontextProvider(props) {
  function AllOrders() {
    let Token = localStorage.getItem("UserToken");
    const decodedToken = jwtDecode(Token);
    const userID = decodedToken.id;
    return axios
      .get(`https://ecommerce.routemisr.com/api/v1/orders/user/${userID}`)
      .then((res) => res.data)
      .catch((err) => err);
  }

  return (
    <Oredrscontext.Provider value={{ AllOrders }}>
      {props.children}
    </Oredrscontext.Provider>
  );
}
