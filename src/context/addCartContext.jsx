import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
export let AddCartContext = createContext();

export default function AddCartContextProvider(props) {
  const [NumberItemsCart, setNumberItemsCart] = useState(0);
  const [CartID, setCartID] = useState(0);
  let headers = {
    token: localStorage.getItem("UserToken"),
  };
  function AddCart(id) {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        { productId: id },
        { headers }
      )
      .then((res) => res)
      .catch((res) => res);
  }
  function getItemCart() {
    return axios
      .get(`https://ecommerce.routemisr.com/api/v1/cart`, { headers })
      .then((res) => {
        setCartID(res.data.data._id);
        setNumberItemsCart(res.data.numOfCartItems);

        return res;
      })
      .catch((res) => res);
  }
  function updateItemCart(id, newCount) {
    return axios
      .put(
        `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        { count: newCount },
        { headers }
      )
      .then((res) => res)
      .catch((res) => res);
  }
  function deleteItems(id) {
    return axios
      .delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, { headers })
      .then((res) => res)
      .catch((res) => res);
  }
  function allDeletItems() {
    return axios
      .delete(`https://ecommerce.routemisr.com/api/v1/cart`, { headers })
      .then((res) => res)
      .catch((res) => res);
  }
  useEffect(() => {
    getItemCart();
  }, []);
  return (
    <AddCartContext.Provider
      value={{
        AddCart,
        getItemCart,
        updateItemCart,
        deleteItems,
        allDeletItems,
        CartID,
        setNumberItemsCart,
        NumberItemsCart,
      }}
    >
      {props.children}
    </AddCartContext.Provider>
  );
}
