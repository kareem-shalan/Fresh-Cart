import React, { useContext, useEffect, useState } from "react";

import styled from "../RecentProduct/RecentProduct.module.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import { toast } from "react-toastify";
import "aos/dist/aos.css";
import useProducts from "../../Hooks/useProducts";
import { AddCartContext } from "../../context/addCartContext";
import { WishlistItems } from "../../context/wishlistContext";
export default function RecentProduct() {
  let {
    CallWithlist,
    CountWishlist,
    setCountWishlist,
    deletItemWithlist,
    TargetWishlist,
  } = useContext(WishlistItems);
  const [wishlistStatus, setWishlistStatus] = useState({});
  const [Proudectloading, setProudectloading] = useState(false);
  const [currentId, setcurrentId] = useState(false);
  let { AddCart, setNumberItemsCart, NumberItemsCart } =
    useContext(AddCartContext);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Adjust the duration as needed
  }, []);
  let { isError, isLoading, data, error } = useProducts();

  if (isError) return <div className="">{error}</div>;
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader">
          <div className="head"></div>
          <div className="flames">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>
          <div className="eye"></div>
        </div>
      </div>
    );
  async function AddProductToCart(id) {
    setProudectloading(true);
    setcurrentId(id);
    let response = await AddCart(id);

    if (response.data?.status == "success") {
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
  async function handellWishlist(id) {
    let res = await CallWithlist(id);
    console.log(res.data, "API Response - Add to Wishlist");

    if (res.data?.status === "success") {
      // Use the functional form of setState to ensure the latest value
      setCountWishlist(CountWishlist + 1);

      // Toggle the wishlist status for this product ID
      setWishlistStatus((prev) => ({
        ...prev,
        [id]: !prev[id], // Toggle the state for this product ID
      }));

      toast.success(res.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    } else {
      toast.error(res.data?.message || "Failed to update wishlist", {
        position: "top-center",
        autoClose: 5000,
        theme: "light",
      });
    }
  }
  async function deletItem(id) {
    let res = await deletItemWithlist(id);
    console.log(res, "API Response - Remove from Wishlist");

    if (res.data?.status === "success") {
      // Use the functional form of setState to ensure the latest value
      setCountWishlist(CountWishlist - 1);

      // Update the wishlist status for this product ID
      setWishlistStatus((prev) => ({
        ...prev,
        [id]: false, // Explicitly set to false (removed from wishlist)
      }));

      toast.success(res.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    } else {
      toast.error(res.data?.message || "Failed to remove from wishlist", {
        position: "top-center",
        autoClose: 5000,
        theme: "light",
      });
    }
  }
  return (
    <div className="px-5 flex justify-center items-center flex-wrap gap-4 py-2 my-2">
      {data.map((product) => (
        <div
          data-aos="fade-up"
          key={product.id}
          className="card overflow-hidden group w-full sm:w-6/12 md:w-4/12 lg:w-3/12 xl:w-2/12"
        >
          <Link to={`/ProductDetails/${product.id}/${product.category.name}`}>
            <div className="image">
              <img
                src={product.imageCover}
                className="w-full"
                alt={product.title}
              />
            </div>
          </Link>

          <div className="radio-inputs">
            <div className="Name bg productTitle">{product.category.name}</div>

            <div className="product-title">
              <span
                className="cursor-pointer"
                onClick={() =>
                  wishlistStatus[product.id] ||
                  TargetWishlist.filter((item) => item == product.id) ==
                    product.id
                    ? deletItem(product.id)
                    : handellWishlist(product.id)
                }
              >
                {wishlistStatus[product.id] ||
                TargetWishlist.filter((item) => item == product.id) ==
                  product.id
                  ? "❤️"
                  : "🖤"}
              </span>
              {product.title.split(" ").splice(0, 2).join(" ")}
              <div className="cost flex justify-around items-center">
                <span>${product.price} </span>{" "}
                <span className="text-black">
                  {" "}
                  <i
                    className={`fas fa-star ${
                      product.ratingsAverage < 4.3
                        ? "text-red-500"
                        : "text-yellow-400"
                    }`}
                  ></i>{" "}
                  {product.ratingsAverage}
                </span>
              </div>
            </div>
          </div>

          <div className="group">
            <button
              onClick={() => AddProductToCart(product.id)}
              className={` ${styled.CartBtn} addtocart absolute top-6 bottom-0 left-0 w-full translate-y-full group-hover:translate-y-[-100%] transition-transform duration-500 bg-black text-white py-2`}
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
              <p className="text">
                {Proudectloading && currentId == product.id
                  ? "Loading..."
                  : " Add to Cart"}
              </p>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
