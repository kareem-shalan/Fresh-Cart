import React, { useContext, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/freshcart-logo.svg";
import { userContext } from "./../../context/userContext";
import { styled } from "styled-components";
import { AddCartContext } from "../../context/addCartContext";
import { WishlistItems } from "../../context/wishlistContext";
import Rat from "../../assets/rat.png";
import Go from "../../assets/icoGo.png";

const StyledWrapper = styled.div`
  .button {
    display: flex;
    justify-content: between;
    padding: 10px 15px;

    border-radius: 5px;
    border: none;

    transition: 400ms;
  }

  .button .text {
    font-weight: 700;
    font-size: 1em;
  }

  .button svg path {
    transition: 400ms;
  }

  .button:hover {
    background-color: transparent;
  }

  .button:hover svg path {
    fill: #181717;
  }
`;

export default function Nav() {
  let { userLogin, setuserLogin } = useContext(userContext);
  let { NumberItemsCart } = useContext(AddCartContext);
  let { CountWishlist } = useContext(WishlistItems);
  const [isLogin, setIsLogin] = useState(true); // State for toggling login/register
  const navigate = useNavigate();

  const handleToggle = () => {
    if (isLogin) {
      navigate("/Login"); // Navigate to Login page
    } else {
      navigate("/Register"); // Navigate to Register page
    }

    setIsLogin(!isLogin); // Toggle the state
  };

  // State to manage whether the menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu (open/close)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function SingOut() {
    setuserLogin(null);
    localStorage.removeItem("UserToken");
    navigate("/Login");
  }

  return (
    <>
      <header className="flex z-[60] shadow-2xl   py-4 px-4  sm:px-6 logo  font-sans min-h-full w-full tracking-wide  relative ">
        <div className="flex  flex-wrap items-center justify-evenly gap-4 w-full max-w-screen-xl mx-auto">
         
          <Link
            href="javascript:void(0)"
            className=" w-[40%] md:w-[10%] flex justify-center items-center md:hidden lg:flex "
          >
            <span className="flex justify-center items-center ">
              <img src={Logo} alt="logo" className="w-36" />
              <img src={Rat} className="w-[60px] " alt="" />
            </span>
          </Link>

          {/* Menu container with dynamic classes based on isOpen */}
          <div
            id="collapseMenu"
            className={`${isOpen ? "max-lg:block" : "max-lg:hidden"}
             md:block max-lg:before:fixed    max-md:before:bg-black  max-md:before:opacity-50 max-md:before:inset-0 max-md:before:z-50   md:w-full lg:w-[70%] `}
          >
            {/* Close button for mobile menu */}
            <button
              id="toggleClose"
              className="md:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border "
              onClick={toggleMenu} // Toggle menu on click
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"></path>
                <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"></path>
              </svg>
            </button>

            {/* Links container */}

            {localStorage.getItem("UserToken") ? (
              <ul className="md:flex  md:justify-center md:items-center  max-md:space-y-3 max-md:fixed   max-md:bg-emerald-700  max-md:h-[470px] max-md:w-full md:w-[90%]  max-md:min-w-[300px] max-md:top-0   max-md:right-0 max-md:p-6  max-md:shadow-md  z-50">
                <li className="max-lg:border-b max-lg:py-3 px-3 ">
                  <NavLink
                    to=""
                    className=" font-extrabold text-slate-400  flex justify-center items-center text-base"
                  >
                    🏠 Home
                  </NavLink>
                </li>
                <li className="max-lg:border-b max-lg:py-3 px-0">
                  <NavLink
                    to="Products"
                    className="font-extrabold text-slate-400 flex justify-center items-center text-base"
                  >
                    📦 Products
                  </NavLink>
                </li>
                <li className="max-lg:border-b max-lg:py-3 px-3">
                  <NavLink
                    to="Categories"
                    className="font-extrabold text-slate-400 flex justify-center items-center text-base"
                  >
                    🛍️ Categories
                  </NavLink>
                </li>
                <li className="max-lg:border-b max-lg:py-3 px-3">
                  <NavLink
                    to="brands"
                    className="font-extrabold text-slate-400 flex justify-center items-center text-base"
                  >
                    🔖 Brands
                  </NavLink>
                </li>
              
                <li className="max-lg:border-b max-lg:py-3 px-3">
                  <NavLink
                    to="wishlist"
                    className="font-extrabold relative text-slate-400 flex justify-center items-center text-base"
                  >
                    📌Wishlist
                    <div className="">
                      {CountWishlist > 0 ? (
                        <div className="  bg-red-600 size-5 animate-bounce ms-2 rounded-full flex items-center justify-center text-white right-2 ">
                          {" "}
                          {CountWishlist}
                        </div>
                      ) : null}
                    </div>
                  </NavLink>
                </li>
                <li className="max-lg:border-b ">
                  <NavLink
                    to="Cart"
                    className="font-extrabold text-slate-400 flex justify-center items-center text-base"
                  >
                    <StyledWrapper className="relative ">
                      <button className="button ">
                        <p className="">🛒 Cart </p>
                        {NumberItemsCart > 0 ? (
                          <div className="absolute bg-red-600 size-5 animate-bounce rounded-full flex items-center justify-center text-white right-10 ">
                            {" "}
                            {NumberItemsCart}
                          </div>
                        ) : null}
                      </button>
                    </StyledWrapper>
                  </NavLink>
                </li>
              </ul>
            ) : null}
          </div>

          <div className="flex items-center w-[50%]   justify-cent md:absolute   md:end-0  md:w-[18%]   md:ml-auto   gap-2">
            <div className="flex justify-center items-center ">
              
              <button
                onClick={!userLogin ? handleToggle : SingOut}
                type="button"
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full text-white text-[15px] font-semibold flex items-center sm:hidden lg:hidden justify-center gap-2 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="cursor-pointer fill-white inline w-4 h-4"
                >
                  <circle cx="10" cy="7" r="6" />
                  <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" />
                </svg>
                {/* {isLogin ? "Login" : "Resgister"  } */}
                {userLogin ? "Sign Out" : isLogin ? "Login" : "Register"}
              </button>
            </div>
            {/* {logic apper  of login} */}
            <div className="hidden md:flex ">
              {!userLogin ? (
                <ul className="flex items-center justify-center">
                  <li className="max-lg:border-b max-lg:py-3 px-3">
                    <NavLink
                      to="Register"
                      className="font-extrabold text-slate-400 flex justify-center items-center text-base"
                    >
                      Register
                    </NavLink>
                  </li>
                  <li className="max-lg:border-b max-lg:py-3 px-3">
                    <NavLink
                      to="Login"
                      className=" font-extrabold text-slate-400 flex justify-center items-center text-base"
                    >
                      Login
                    </NavLink>
                  </li>
                </ul>
              ) : (
                <ul className="flex items-center justify-center">
                  <li className="max-lg:border-b max-lg:py-3 px-3">
                    <NavLink
                      onClick={SingOut}
                      to="#"
                      className=" font-extrabold text-slate-400 flex justify-center items-center text-base"
                    >
                      sign out
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>

            {/* Open button for mobile menu */}
            {localStorage.getItem("UserToken") ? (
              <div className="flex justify-center  items-center w-[10%] lg:w-0 md:hidden">
                <button
                  id="toggleOpen"
                  onClick={toggleMenu} // Toggle menu on click
                >
                  <svg
                    className="w-7 h-7"
                    fill="#000"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </header>
    </>
  );
}
