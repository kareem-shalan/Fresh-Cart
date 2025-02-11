import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { styled } from "styled-components";
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { userContext } from "../../context/userContext";
import photo1 from "../../assets/login1.png";


<RotatingLines
  visible={true}
  height="96"
  width="96"
  strokeWidth="5"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperclassName=""
/>;

const Register = () => {
  let { setuserLogin } = useContext(userContext);
  const [isLoading, setisLoading] = useState(false);
  const [ApiError, setApiError] = useState("");
  let navigate = useNavigate();
  async function handleRegister(values) {
    setisLoading(true);
    try {
      // Perform the API request
      let response = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        values
      );

      // Check the API response
      if (response.data.message === "success") {
        console.log("Registration successful!");
        localStorage.setItem("UserToken", response.data.token);
        setuserLogin(response.data.token);
        navigate("/Login"); // Navigate to the home page
      } else {
        console.log("Unexpected response:", response.data.message);
        setApiError(response.data.message || "Unexpected error occurred.");
      }
    } catch (error) {
      setisLoading(false);

      // Handle errors
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error("Error:", error.response.data.message);
        setApiError(error.response.data.message || "An error occurred.");
      } else {
        // Network error or request never left
        console.error("Network Error:", error.message);
        setApiError("Network error. Please try again.");
      }
    }
  }
  let MyYup = yup.object().shape({
    name: yup
      .string()
      .min(4, "4 chars min")
      .max(10, "Max 10 chars")
      .required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "6 chars min")
      .max(10, "Max 10 chars")
      .required("Password required"),
    rePassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords don't match")
      .required("Confirm password"),
    phone: yup
      .string()
      .matches(/^(\+20|0)?1[0125][\s-]?\d{4}[\s-]?\d{4}$/, "Invalid phone")
      .required("Phone required"),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    validationSchema: MyYup,
    onSubmit: handleRegister,
  });
  return (
    <StyledWrapper className="m-auto p-5 md:p-0 z-[500] relative  ">
      <form
        onSubmit={formik.handleSubmit}
        style={{ backgroundImage: `url(${photo1})  ` }}
        className="formRegister  w-full backdrop-blur-[3px] bg-no-repeat bg-contain bg-center md:bg-left shadow-2xl bg-black bg-blend-multiply  bg-opacity-20  from-transparent overflow-hidden md:rounded-3xl flex  justify-center  "
      >
        <div className="w-[70%]   ">
          <div className="md:flex md:flex-wrap md:justify-around md:items-center">
            {ApiError ? (
              <div className=" mt-5 rounded-3xl font-extrabold  text-xl  p-3  bg-red-500 text-center md:flex md:flex-wrap md:justify-around  md:items-center animate-bounce">
                {ApiError}
              </div>
            ) : null}
            <div className="form-control  w-[50%]">
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                id="userName"
                value={formik.values.name}
                name="name"
                required
              />
              <label id="userName" className="form-label ">
                <span className="" style={{ transitionDelay: "0ms" }}>U</span>
                <span style={{ transitionDelay: "50ms" }}>s</span>
                <span style={{ transitionDelay: "100ms" }}>e</span>
                <span style={{ transitionDelay: "150ms" }}>r</span>
                <span style={{ transitionDelay: "200ms" }}>n</span>
                <span style={{ transitionDelay: "250ms" }}>a</span>
                <span style={{ transitionDelay: "300ms" }}>m</span>
                <span style={{ transitionDelay: "350ms" }}>e</span>
              </label>

              {formik.errors.name && formik.touched.name ? (
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
                    Error - {formik.errors.name}
                  </p>
                </div>
              ) : null}
              {!formik.errors.name && formik.touched.name ? (
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
            <div className="form-control  w-[50%] ">
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                value={formik.values.email}
                name="email"
                id="email"
                required
              />
              <label id="email" className="form-label">
                <span style={{ transitionDelay: "0ms" }}>E</span>
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
                    Error - {formik.errors.email}.
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
            <div className="form-control  w-[50%] ">
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="password"
                value={formik.values.password}
                name="password"
                id="password"
                required
              />
              <label id="password" className="form-label">
                <span style={{ transitionDelay: "0ms" }}>P</span>
                <span style={{ transitionDelay: "50ms" }}>a</span>
                <span style={{ transitionDelay: "100ms" }}>s</span>
                <span style={{ transitionDelay: "150ms" }}>s</span>
                <span style={{ transitionDelay: "200ms" }}>w</span>
                <span style={{ transitionDelay: "250ms" }}>o</span>
                <span style={{ transitionDelay: "300ms" }}>r</span>
                <span style={{ transitionDelay: "350ms" }}>d</span>
              </label>
              {formik.errors.password && formik.touched.password ? (
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
                    Error - {formik.errors.password}
                  </p>
                </div>
              ) : null}
              {!formik.errors.password && formik.touched.password ? (
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
            <div className="form-control  w-[50%]">
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="password"
                value={formik.values.rePassword}
                name="rePassword"
                id="rePassword"
                required
              />
              <label id="rePassword" className="form-label">
                <span style={{ transitionDelay: "0ms" }}>r</span>
                <span style={{ transitionDelay: "50ms" }}>e</span>
                <span style={{ transitionDelay: "100ms" }}>p</span>
                <span style={{ transitionDelay: "150ms" }}>a</span>
                <span style={{ transitionDelay: "200ms" }}>s</span>
                <span style={{ transitionDelay: "250ms" }}>s</span>
                <span style={{ transitionDelay: "300ms" }}>w</span>
                <span style={{ transitionDelay: "350ms" }}>o</span>
                <span style={{ transitionDelay: "350ms" }}>r</span>
                <span style={{ transitionDelay: "350ms" }}>d</span>
              </label>
              {formik.errors.rePassword && formik.touched.rePassword ? (
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
                    Error - {formik.errors.rePassword}
                  </p>
                </div>
              ) : null}
              {!formik.errors.rePassword && formik.touched.rePassword ? (
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
            <div className="form-control  ">
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="tel"
                value={formik.values.phone}
                name="phone"
                id="phone"
                required
              />
              <label className="form-label" id="phone">
                <span style={{ transitionDelay: "0ms" }}>P</span>
                <span style={{ transitionDelay: "50ms" }}>h</span>
                <span style={{ transitionDelay: "100ms" }}>o</span>
                <span style={{ transitionDelay: "150ms" }}>n</span>
                <span style={{ transitionDelay: "200ms" }}>e</span>
              </label>
              {formik.errors.phone && formik.touched.phone ? (
                <div
                  role="alert"
                  className="bg-red-100 dark:bg-red-900 border-l-4 border-red-500 dark:border-red-700 text-red-900 dark:text-red-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-red-200 dark:hover:bg-red-800 transform mt-2 hover:scale-105"
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
            <div className="button py-10 md:py-0">
              <button
                type="submit"
                className="uppercase form-submit-button flex items-center justify-center text-white tracking-wider font-serif  font-extrabold"
              >
                {isLoading ? (
                  <span className="flex justify-center items-center size-10 ">
                    <RotatingLines />
                  </span>
                ) : (
                  "Register"
                )}
              </button>
              <Link
                to="/Login"
                className="flex  items-center justify-center underline text-blue-600"
              >
                <span className="my-5 ">Do you Have An Account ?</span>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </StyledWrapper>
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

export default Register;
