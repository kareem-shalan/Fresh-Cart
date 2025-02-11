import React, { useContext, useEffect, useState } from "react";
import { AddCartContext } from "../../context/addCartContext";
import { toast } from "react-toastify";
import { styled } from "styled-components";
import CartLoading from "../CartLoading/CartLoading";
import NoItemsToshow from "../NoItemsTOshow/NoItemsTOshow";
import DeleteButton from "../DeleteButton/DeleteButton";
import CheckoutButton from "../CheckoutButton/CheckoutButton";
import { Link } from "react-router-dom";

export default function Cart() {
  let { setNumberItemsCart, NumberItemsCart } = useContext(AddCartContext);

  const [saveItemCart, setsaveItemCart] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentId, setcurrentId] = useState(false);
  const [deletId, setdeletId] = useState(false);
  let { getItemCart, updateItemCart, deleteItems, allDeletItems } =
    useContext(AddCartContext);

  async function ItemCart() {
    let itemsCart = await getItemCart();
    if (itemsCart.data.status == "success") {
      setsaveItemCart(itemsCart.data.data);
      console.log(saveItemCart);
    } else {
      toast.error("Failed to load cart");
    }
  }
  async function updateCart(id, count) {
    setcurrentId(id);
    setLoading(true);
    let updateItemsCart = await updateItemCart(id, count);
    if (updateItemsCart.data.status === "success") {
      setsaveItemCart(updateItemsCart.data.data);
      toast.success("Cart updated successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light", // Choose a theme
      });
    } else {
      toast.error("Failed to update cart");
    }
    setLoading(false);
    setcurrentId(0);
  }
  async function deleteProduct(id) {
    setNumberItemsCart(NumberItemsCart - 1);
    setLoading(true);
    setdeletId(id);
    let updateItemsCart = await deleteItems(id);
    if (updateItemsCart.data.status === "success") {
      setsaveItemCart(updateItemsCart.data.data);
      toast.success("Product Removed successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light", // Choose a theme
      });
    } else {
      toast.error("Failed to Remove Product");
    }
    setLoading(false);
  }
  async function DeleteButtonCart() {
    setNumberItemsCart(0);
    let clearCart = await allDeletItems();
    if (clearCart.status == 200) setsaveItemCart(clearCart.data.data);
    console.log(clearCart, "dfgdfgdfgdfgdgf");
  }
  useEffect(() => {
    ItemCart();
  }, []);
  return (
    <>
      <span className="text-3xl font-serif text-red-500 tracking-widest font-extrabold">
        {saveItemCart?.totalCartPrice > 0 ? (
          <>
            <div className="flex justify-center items-center">
              <span className="place-self-center text-2xl font-bold text-e">
                {saveItemCart?.totalCartPrice} $
              </span>
            </div>
            <div className="flex justify-end items-center">
              <button onClick={() => DeleteButtonCart()}>
                <DeleteButton />
              </button>
            </div>
          </>
        ) : (
          <NoItemsToshow />
        )}
      </span>
      {saveItemCart?.totalCartPrice > 0 ? (
        <>
          <div className="p-6">
            <div className="w-full text-sm text-left rtl:text-right text-white">
              <div className="text-xs text-white uppercase bg-gradient-to-r from-emerald-700 to-emerald-600 p-4 rounded-t-lg">
                <div className="grid grid-cols-5 gap-4 sm:grid-cols-3 md:grid-cols-5">
                  <span className="col-span-1 font-extrabold font-serif ">
                    Image
                  </span>
                  <span className="col-span-1 font-extrabold font-serif ">
                    Product
                  </span>
                  <span className="col-span-1 font-extrabold font-serif ">
                    Qty
                  </span>
                  <span className="col-span-1 font-extrabold font-serif ">
                    Price
                  </span>
                  <span className="col-span-1 font-extrabold font-serif ">
                    Action
                  </span>
                </div>
              </div>
              <div className="backdrop-blur-[3px] shadow-2xl bg-black  bg-blend-multiply bg-opacity-20 rounded-b-lg">
                {saveItemCart?.products?.map((product) => (
                  <div
                    key={product.id}
                    className="flex justify-between items-center border-b p-4 flex-wrap sm:flex-nowrap hover:bg-[#C8F2BD] transition duration-300 ease-in-out"
                  >
                    <div className="w-full sm:w-1/5 mb-2 sm:mb-0">
                      <img
                        src={product.product.imageCover}
                        className="w-16 md:w-32 max-w-full max-h-full rounded-lg"
                        alt="Product"
                      />
                    </div>
                    <div className="w-full sm:w-1/5 font-semibold text-emerald-900 product-title mb-2 sm:mb-0">
                      {product.product.title}
                    </div>
                    <div className="w-full sm:w-1/5 flex items-center mb-2 sm:mb-0">
                      <button
                        onClick={() =>
                          updateCart(product.product.id, product.count - 1)
                        }
                        className="inline-flex items-center justify-center p-2 me-3 text-white bg-emerald-600 border border-emerald-500 rounded-full focus:outline-none hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-300"
                        type="button"
                      >
                        <span className="sr-only">Decrease quantity</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <div>
                        <span className="text-emerald-600 font-bold">
                          {loading && currentId == product.product.id ? (
                            <span>Loading...</span>
                          ) : (
                            <span>{product.count}</span>
                          )}
                        </span>
                      </div>
                      <button
                        onClick={() =>
                          updateCart(product.product.id, product.count + 1)
                        }
                        className="inline-flex items-center justify-center p-2 ms-3 text-white bg-emerald-600 border border-emerald-500 rounded-full focus:outline-none hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-300"
                        type="button"
                      >
                        <span className="sr-only">Increase quantity</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="w-full sm:w-1/5 px-3 font-semibold text-red-600 text-lg mb-2 sm:mb-0">
                      ${product.price * (product.count || 0)}
                    </div>
                    <div className="w-full sm:w-1/5 mb-2 sm:mb-0">
                      <button
                        onClick={() => deleteProduct(product?.product?.id)}
                        className="font-medium text-white  bg-gradient-to-r from-orange-400 via-red-500 to-red-600 hover:underline"
                      >
                        {loading && deletId == product.product.id
                          ? "Loading..."
                          : "Remove"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className=" flex  justify-center   items-center py-5">
              <Link to={`/checkout`}>
                <CheckoutButton />
              </Link>
          
            </div>
          </div>
        </>
      ) : (
        <CartLoading />
      )}
    </>
  );
}
