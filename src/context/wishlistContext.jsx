import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let WishlistItems = createContext();

export default function WishlistItemsProvider(props) {
  const [CountWishlist, setCountWishlist] = useState(0);
  const [TargetWishlist, setTargetWishlist] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  let headers = {
    token: localStorage.getItem("UserToken"),
  };

  function CallWithlist(id) {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        { productId: id },
        { headers }
      )
      .then((res) => {
        setCountWishlist(res.data.count);

        return res;
      })
      .catch((err) => err);
  }

  function getItemWithlist() {
    return axios
      .get(`https://ecommerce.routemisr.com/api/v1/wishlist`, { headers })
      .then((res) => {
        setCountWishlist(res.data.count);
        setWishlistItems(res.data.data);
        setTargetWishlist(res?.data?.data?.map((product) => product.id));
        console.log(TargetWishlist);

        return res;
      })
      .catch((err) => err);
  }

  function deletItemWithlist(id) {
    return axios
      .delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
        headers,
      })
      .then((res) => {
        getItemWithlist();
        return res;
      })
      .catch((err) => err);
  }

  useEffect(() => {
    getItemWithlist();
    CallWithlist();
  }, []); // Run only once on mount

  return (
    <WishlistItems.Provider
      value={{
        CallWithlist,
        getItemWithlist,
        deletItemWithlist,
        CountWishlist,
        setCountWishlist,
        wishlistItems,
        setWishlistItems,
        setTargetWishlist,
        TargetWishlist,
      }}
    >
      {props.children}
    </WishlistItems.Provider>
  );
}
