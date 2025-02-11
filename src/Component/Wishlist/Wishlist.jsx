import React, { useContext, useEffect, useState } from "react";
import { WishlistItems } from "../../context/wishlistContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AddCartContext } from "../../context/addCartContext";
import { toast } from "react-toastify";

import NoItemsToshow from "../NoItemsTOshow/NoItemsTOshow";
import CartLoading from "../CartLoading/CartLoading";
import DeleteButton from "../DeleteButton/DeleteButton";

export default function Wishlist() {
  const [Proudectloading, setProudectloading] = useState(false);
  const [currentId, setcurrentId] = useState(false);
  const [ItemWillpay, setItemWillpay] = useState([]);
  let { getItemWithlist, deletItemWithlist } = useContext(WishlistItems);
  let { AddCart, setNumberItemsCart, NumberItemsCart } = useContext(AddCartContext);

  async function AddProductToCart(id) {
    setProudectloading(true);
    setcurrentId(id);
    let response = await AddCart(id);

    if (response.data?.status === "success") {
      setNumberItemsCart(NumberItemsCart + 1);
      toast.success(response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light", // Choose a theme
      });
    } else {
      toast.error(response.data?.message || "An error occurred", {
        position: "top-center",
        autoClose: 5000,
        theme: "light",
      });
    }
    setProudectloading(false);
  }

  async function getWithlist() {
    setProudectloading(true);
    let res = await getItemWithlist();
    setItemWillpay(res.data.data);
    setProudectloading(false);
  }

  async function deletItem(id) {
    setProudectloading(true);
    let res = await deletItemWithlist(id);
    console.log(res, "deleting");
    if (res.data?.status == "success") {
      setItemWillpay((prev) => prev.filter((item) => item.id !== id));
      toast.success(res.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light", // Choose a theme
      });
    } else {
      toast.error(res.data?.message || "An error occurred", {
        position: "top-center",
        autoClose: 5000,
        theme: "light",
      });
    }
    setProudectloading(false);
  }



  useEffect(() => {
    getWithlist();
  }, []);

  return (
    <>
      {ItemWillpay.length > 0 ? (
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-emerald-400 via-emerald-400 to-emerald-700 text-transparent bg-clip-text my-8">
          Wish List
        </h1>
      ) : (
        <NoItemsToshow />
      )}
      {ItemWillpay.length > 0 ? (
        <>
         
          <div className="overflow-hidden items-start justify-center flex gap-3 flex-wrap rounded-b-lg">
            {ItemWillpay.map((product) => (
              <div
                key={product.id}
                className="card overflow-hidden group w-full sm:w-6/12 md:w-4/12 lg:w-3/12 xl:w-2/12 hover:bg-[#C8F2BD] transition duration-300 ease-in-out py-4"
              >
                <Link to={`/ProductDetails/${product.id}/${product.category.name}`}>
                  <div className="image">
                    <img src={product.imageCover} className="w-full" alt={product.title} />
                  </div>
                </Link>

                <div className="radio-inputs">
                  <div className="Name bg productTitle">{product.category.name}</div>

                  <div className="product-title">
                    {product.title.split(" ").splice(0, 2).join(" ")}
                    <div className="cost flex justify-around items-center">
                      <span>${product.price} </span>{" "}
                      <span className="text-black">
                        {" "}
                        <i
                          className={`fas fa-star ${
                            product.ratingsAverage < 4.3 ? "text-red-500" : "text-yellow-400"
                          }`}
                        ></i>{" "}
                        {product.ratingsAverage}
                      </span>
                      <span className="cursor-pointer" onClick={() => deletItem(product.id)}>
                        ❌
                      </span>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <button
                    onClick={() => AddProductToCart(product.id)}
                    className={` ${styled.CartBtn} addtocart absolute top-[100%] bottom-0 left-0 w-full translate-y-full group-hover:translate-y-[-50%] transition-transform duration-500 bg-black text-white py-2`}
                  >
                    <span className={`${styled.IconContainer}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 576 512"
                        fill="rgb(17, 17, 17)"
                        className="cart"
                      >
                        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                      </svg>
                    </span>
                    <p className="text absolute translate-x-10 top-3">
                      {Proudectloading && currentId == product.id ? "Loading..." : " Add to Cart"}
                    </p>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <CartLoading />
      )}
    </>
  );
}