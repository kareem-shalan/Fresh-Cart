import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "../ProductDetails/ProductDetails.module.css";
import AOS from "aos";
import Slider from "react-slick";
import "aos/dist/aos.css";
import "animate.css";
import Loader from "../Loader/Loader";
import { AddCartContext } from "../../context/addCartContext";
import { toast } from "react-toastify";
import { WishlistItems } from "../../context/wishlistContext";

export default function ProductDetails() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 2000,
    autoplay: true,
  };
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Adjust the duration as needed
  }, []);
  let { AddCart, NumberItemsCart, setNumberItemsCart } =
    useContext(AddCartContext);
  const [wishlistStatus, setWishlistStatus] = useState({});
  const [MyProduct, setMyProduct] = useState([]);
  const [AllProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Proudectloading, setProudectloading] = useState(false);
  const [currentId, setcurrentId] = useState(false);
  let { CallWithlist, CountWishlist, setCountWishlist, deletItemWithlist , TargetWishlist } =
    useContext(WishlistItems);
  let { id, category } = useParams();
  function ShowOneData(id) {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then((res) => {
        console.log(
          res.data.data,
          "ddddddddddddddddddddddddddddddddddddddddddddddddddddd"
        );
        setMyProduct(res.data.data);
      })
      .catch((res) => {
        console.log(res);
      });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function ShowAllData() {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products`).then((res) => {
      let RelatedProduct = res.data.data.filter(
        (product) => product.category.name == category
      );
      console.log("RelatedProduct", RelatedProduct);
      setAllProducts(RelatedProduct);
    });
    setLoading(false);
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

  useEffect(() => {
    console.log("Category before fetching:", category);
    ShowOneData(id);
    ShowAllData();
  }, [id, category]);

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

  if (loading) return <Loader />;

  return (
    <>
      <div
        data-aos="fade-down"
        className=" flex  flex-wrap justify-between items-center px-6 py-3  lg:pt-10"
      >
        {/* Product Image Section */}
        <div className="lg:w-1/4 w-full px-6 py-3 ">
          <div className={`${styled.card}`}>
            <div className={`${styled.cardoverlay}`} />
            <div className={`${styled.cardinner}`}>
              <Slider {...settings} className="mb-5">
                {MyProduct?.images?.map((src, index) => (
                  <img key={index} src={src} className="w-full" />
                ))}
              </Slider>
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className={`${styled.card}  lg:w-3/4 w-full px-6 py-3 `}>
          <div
            className={`${styled.cardinner} w-full flex flex-col justify-center items-center `}
          >
            <h1 className=" font-serif text-black">{MyProduct?.title}</h1>
            <p className="p-5 md:p-0 text-balance animate__bounceInLeft animate__animated line-clamp-5 hover:line-clamp-none ">
              {MyProduct?.description}
            </p>
            <h3 className="cost">${MyProduct?.price} </h3>

            <div className="cost text-lg font-bold flex w-full justify-around  ">
              <span
                className="cursor-pointer"
                onClick={() =>
                  wishlistStatus[MyProduct.id] ||
                  TargetWishlist.filter((item) => item == MyProduct.id) ==
                    MyProduct.id
                    ? deletItem(MyProduct.id)
                    : handellWishlist(MyProduct.id)
                }
              >
                {wishlistStatus[MyProduct.id] ||
                TargetWishlist.filter((item) => item == MyProduct.id) ==
                  MyProduct.id
                  ? "❤️"
                  : "🖤"}
              </span>
              <h3 className="text-green-500 font-extrabold  font-serif">
                {MyProduct?.category?.name}
              </h3>

              <i
                className={`fas fa-star ${
                  MyProduct.ratingsAverage < 4.3
                    ? "text-red-500"
                    : "text-yellow-400"
                }`}
              >
                <span className="text-black">{MyProduct.ratingsAverage}</span>
              </i>
            </div>

            <div className="md:pb-2 animate-pulse ">
              <button
                onClick={() => AddProductToCart(MyProduct.id)}
                title="Add"
                className={`${styled.cssbuttonsiobutton}  w-[50em] flex items-center justify-center gap-2`}
              >
                <svg
                  height={25}
                  width={25}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                    fill="currentColor"
                  />
                </svg>
                <span>
                  {" "}
                  {Proudectloading && currentId == MyProduct.id
                    ? "Loading..."
                    : " Add to Cart"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* All Product Details Related Section */}

      <div className=" px-5 flex justify-center items-center   flex-wrap gap-2 py-2 my-2">
        {AllProducts.length > 0
          ? AllProducts.map((product) => (
              <div
                data-aos="fade-up"
                key={product.id}
                className="card  overflow-hidden  group w-full md:w-3/12 "
              >
                <Link
                  to={`/ProductDetails/${product.id}/${product.category.name}`}
                >
                  <div className="image  ">
                    <img src={product.imageCover} className="w-full" alt="" />
                  </div>
                </Link>

                <div className="radio-inputs ">
                  <div className="Name bg productTitle ">
                    {product?.category.name}
                  </div>
                  <div className="product-title font bg ">
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
                    {product?.title.split(" ").splice(0, 2).join(" ")}
                  </div>
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
                <div className="group">
                  <button
                    onClick={() => AddProductToCart(product.id)}
                    className={` ${styled.CartBtn} addtocart absolute top-6 bottom-0 left-0 w-full translate-y-full group-hover:translate-y-[-100%] transition-transform duration-500 bg-black text-white py-2`}
                  >
                    <span class={`${styled.IconContainer}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 576 512"
                        fill="rgb(17, 17, 17)"
                        class="cart"
                      >
                        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                      </svg>
                    </span>
                    <p class="text">
                      {setProudectloading && currentId == product.id
                        ? "Loading..."
                        : " Add to Cart"}
                    </p>
                  </button>
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
}
