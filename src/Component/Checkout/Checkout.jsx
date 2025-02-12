import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import * as yup from "yup";
import formPhoto from "../../assets/formCheckout.jpg";
import { CheckoutInfo } from "../../context/checkoutContext";
import { AddCartContext } from "../../context/addCartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  let MyYup = yup.object().shape({
    city: yup.string("Invalid city").required("city is required"),
    details: yup.string("Invalid details").required("details is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup
      .string()
      .matches(/^(\+20|0)?1[0125][\s-]?\d{4}[\s-]?\d{4}$/, "Invalid phone")
      .required("Phone required"),
  });
  let { PaymentCart } = useContext(CheckoutInfo);
  let { CartID } = useContext(AddCartContext);
  let formik = useFormik({
    initialValues: {
      details: "",
      phone: "",
      city: "",
      email: "",
    },

    validationSchema: MyYup,
    onSubmit: () => handleCheckout(CartID, `http://localhost:5173`),
  });
  async function handleCheckout(CardId, url) {
    try {
      let { data } = await PaymentCart(CardId, url, formik.values);
      window.location.href = data.session.url;
    } catch (error) {
      toast.error("Checkout failed. Please try again.");
    }
  }

  return (
    <>
      <ToastContainer />
      <StyledWrapper
        style={{
          backgroundImage: `url(${formPhoto})   `,
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          backgroundAttachment: "fixed",
        }}
        className="m-auto p-5 md:p-0 z-[500] relative formRegister from-transparent  bg-black  shadow-2xl  bg-blend-multiply  bg-opacity-30  "
      >
        <form
          onSubmit={formik.handleSubmit}
          className=" w-full backdrop-blur-[3px]   overflow-hidden md:rounded-3xl flex  justify-center  "
        >
          <div className="w-[50%] relative flex justify-center items-center  md:h-[600px] flex-col  ">
            <div className="md:flex md:flex-wrap md:justify-around md:items-center">
              <div className="form-control w-[50%]">
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="email"
                  value={formik.values.email}
                  name="email"
                  id="email"
                  required
                />
                <label id="email" className="form-label">
                  <span style={{ transitionDelay: "0ms" }}>e</span>
                  <span style={{ transitionDelay: "50ms" }}>m</span>
                  <span style={{ transitionDelay: "100ms" }}>a</span>
                  <span style={{ transitionDelay: "150ms" }}>i</span>
                  <span style={{ transitionDelay: "200ms" }}>l</span>
                </label>
                {formik.errors.email && formik.touched.email ? (
                <div
                  role="alert"
                  className="bg-red-100 dark:bg-red-900 border-l-4 border-red-500 dark:border-red-700 text-red-900 dark:text-red-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-red-200 dark:hover:bg-red-800 transform mt-2 hover:scale-105 "
                >
                  <svg
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 flex-shrink-0 mr-2 text-red-600"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                  <p className="text-xs font-semibold">
                    Error - {formik.errors.email}
                  </p>
                </div>
              ) : null}
              {!formik.errors.email && formik.touched.email ? (
                <div
                  role="alert"
                  className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 dark:border-green-700 text-green-900 dark:text-green-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-green-200 dark:hover:bg-green-800 transform hover:scale-105 mt-2"
                >
                  <svg
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 flex-shrink-0 mr-2 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                  <p className="text-xs font-semibold">
                    Success - Everything went smoothly!
                  </p>
                </div>
              ) : null}
              </div>
            </div>
            <div className="md:flex md:flex-wrap md:justify-around md:items-center">
              <div className="form-control w-[50%]">
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="tel"
                  value={formik.values.phone}
                  name="phone"
                  id="phone"
                  required
                />
                <label id="phone" className="form-label">
                  <span style={{ transitionDelay: "0ms"  }}>p</span>
                  <span style={{ transitionDelay: "50ms" }}>h</span>
                  <span style={{ transitionDelay: "100ms" }}>o</span>
                  <span style={{ transitionDelay: "150ms" }}>n</span>
                  <span style={{ transitionDelay: "200ms" }}>e</span>
                </label>
                {formik.errors.phone && formik.touched.phone ? (
                <div
                  role="alert"
                  className="bg-red-100 dark:bg-red-900 border-l-4 border-red-500 dark:border-red-700 text-red-900 dark:text-red-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-red-200 dark:hover:bg-red-800 transform mt-2 hover:scale-105 "
                >
                  <svg
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 flex-shrink-0 mr-2 text-red-600"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                  <p className="text-xs font-semibold">
                    Error - {formik.errors.phone}
                  </p>
                </div>
              ) : null}
              {!formik.errors.phone && formik.touched.phone ? (
                <div
                  role="alert"
                  className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 dark:border-green-700 text-green-900 dark:text-green-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-green-200 dark:hover:bg-green-800 transform hover:scale-105 mt-2"
                >
                  <svg
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 flex-shrink-0 mr-2 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                  <p className="text-xs font-semibold">
                    Success - Everything went smoothly!
                  </p>
                </div>
              ) : null}
              </div>
            </div>
            <div className="md:flex md:flex-wrap md:justify-around md:items-center">
              <div className="form-control w-[50%]">
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  value={formik.values.city}
                  name="city"
                  id="city"
                  required
                />
                <label id="city" className="form-label">
                  <span style={{ transitionDelay: "0ms" }}>c</span>
                  <span style={{ transitionDelay: "50ms" }}>i</span>
                  <span style={{ transitionDelay: "100ms" }}>t</span>
                  <span style={{ transitionDelay: "150ms" }}>y</span>
                </label>
                {formik.errors.city && formik.touched.city ? (
                <div
                  role="alert"
                  className="bg-red-100 dark:bg-red-900 border-l-4 border-red-500 dark:border-red-700 text-red-900 dark:text-red-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-red-200 dark:hover:bg-red-800 transform mt-2 hover:scale-105 "
                >
                  <svg
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 flex-shrink-0 mr-2 text-red-600"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                  <p className="text-xs font-semibold">
                    Error - {formik.errors.city}
                  </p>
                </div>
              ) : null}
              {!formik.errors.city && formik.touched.city ? (
                <div
                  role="alert"
                  className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 dark:border-green-700 text-green-900 dark:text-green-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-green-200 dark:hover:bg-green-800 transform hover:scale-105 mt-2"
                >
                  <svg
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 flex-shrink-0 mr-2 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                  <p className="text-xs font-semibold">
                    Success - Everything went smoothly!
                  </p>
                </div>
              ) : null}
              </div>
            </div>
            <div className="md:flex md:flex-wrap md:justify-around md:items-center">
              <div className="form-control w-[50%]">
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  value={formik.values.details}
                  name="details"
                  id="details"
                  required
                />
                <label id="details" className="form-label">
                  <span style={{ transitionDelay: "0ms" }}>d</span>
                  <span style={{ transitionDelay: "50ms" }}>e</span>
                  <span style={{ transitionDelay: "100ms" }}>t</span>
                  <span style={{ transitionDelay: "150ms" }}>a</span>
                  <span style={{ transitionDelay: "200ms" }}>i</span>
                  <span style={{ transitionDelay: "250ms" }}>l</span>
                  <span style={{ transitionDelay: "300ms" }}>s</span>
                </label>
                {formik.errors.details && formik.touched.details ? (
                <div
                  role="alert"
                  className="bg-red-100 dark:bg-red-900 border-l-4 border-red-500 dark:border-red-700 text-red-900 dark:text-red-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-red-200 dark:hover:bg-red-800 transform mt-2 hover:scale-105 "
                >
                  <svg
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 flex-shrink-0 mr-2 text-red-600"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                  <p className="text-xs font-semibold">
                    Error - {formik.errors.details}
                  </p>
                </div>
              ) : null}
              {!formik.errors.details && formik.touched.details ? (
                <div
                  role="alert"
                  className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 dark:border-green-700 text-green-900 dark:text-green-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-green-200 dark:hover:bg-green-800 transform hover:scale-105 mt-2"
                >
                  <svg
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 flex-shrink-0 mr-2 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                  <p className="text-xs font-semibold">
                    Success - Everything went smoothly!
                  </p>
                </div>
              ) : null}
              
              </div>
            </div>
            <div className="md:flex md:flex-wrap md:justify-around md:items-center">
              <div className="button py-10 md:py-0 md:flex md:flex-wrap md:justify-center md:items-center flex-col">
                <button
                  type="submit"
                  className="uppercase rounded-ee-3xl     bg-blue-500 flex hover:bg-blue-700 duration-300 items-center justify-center text-white tracking-wider font-serif font-extrabold"
                >
                  <span className="flex   justify-center  items-center    ">
                    Pay Now
                  </span>
                </button>
              </div>
            </div>
            <div className="flex justify-end  w-full   items-end">
              <Link
                to="/Products"
                className=" group   text-white hover:text-white bg-gradient-to-r overflow-hidden from-cyan-500 to-blue-500 w-10  h-10 rounded-full hover:w-28  transition-all duration-300 flex text-sm items-center justify-center"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
                <span className="hidden  group-hover:flex">back to shop</span>
              </Link>
            </div>
          </div>
        </form>
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  .form-control {
    position: relative;
    margin: 20px 0 40px;
    width: 190px;
  }

  .form-control input {
    background-color: transparent;
    border: 0;
    border-bottom: 2px #fff solid;

    display: block;
    width: 100%;
    padding: 15px 0;
    font-size: 18px;
    color: #fff;
  }

  .form-control input:focus,
  .form-control input:valid {
    outline: 0;
    border-bottom-color: lightblue;
  }

  .form-control label {
    position: absolute;
    top: 15px;
    left: 0;
    pointer-events: none;
  }

  .form-control label span {
    display: inline-block;
    font-size: 18px;
    min-width: 5px;

    transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .form-control input:focus + label span,
  .form-control input:valid + label span {
    color: lightblue;
    transform: translateY(-30px);
  }
`;

export default Checkout;
