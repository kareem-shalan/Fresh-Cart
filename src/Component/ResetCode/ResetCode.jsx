import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { styled } from "styled-components";
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { userContext } from "../../context/userContext";
import photo1 from "../../assets/login1.png";
import photo2 from "../../assets/login2.png";
import photo3 from "../../assets/login3.png";

const ResetCode = () => {
  let { userLogin, setuserLogin } = useContext(userContext);
  const [isLoading, setisLoading] = useState(false);
  const [ApiError, setApiError] = useState("");
  let navigate = useNavigate();

  async function handlrecode(values) {
    setisLoading(true);
    setApiError(""); // Clear any previous error

    try {
      let response = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
        values
      );
      console.log(response);

      // Check for a successful response
      if (response.data.status === "Success") {
        console.log("Password reset request successful!");

        // Navigate to the ResetCode page
        navigate("/rePassword");
      } else {
        console.log("Unexpected response Forget:", response.data.message);
        setApiError(response.data.message || "Unexpected error occurred.");
      }
    } catch (error) {
      if (error.response) {
        console.error("Error:", error.response.data.message);
        setApiError(error.response.data.message || "An error occurred.");
      } else {
        console.error("Network Error:", error.message);
        setApiError("Network error. Please try again.");
      }
    }
    setisLoading(false);
  }

  let MyYup = yup.object().shape({
    resetCode: yup
      .string()
      .matches(/^\d+$/, "Reset code must contain only numbers")
      .required("Reset code is required"),
  });

  let formik = useFormik({
    initialValues: {
      resetCode: "",
    },
    validationSchema: MyYup,
    onSubmit: handlrecode,
  });

  return (
    <StyledWrapper className="m-auto p-5 md:p-0 z-[500] relative">
      <form
        onSubmit={formik.handleSubmit}
        className="formRegister w-full backdrop-blur-[3px] shadow-2xl bg-black bg-blend-multiply bg-opacity-20 from-transparent overflow-hidden md:rounded-3xl flex justify-center"
      >
        <div className="w-full relative flex justify-center items-center md:h-[600px]">
          <img src={photo2} className="w-full absolute h-full" alt="" />
          <img
            src={photo1}
            className="animate-pulse w-full z-30 left-10 top-20 md:top-0 md:left-60 object-cover md:absolute"
            alt=""
          />
          <img
            src={photo3}
            className="w-2/4 md:top-16 object-cover lg:left-96 lg:w-2/5 absolute"
            alt=""
          />
        </div>

        <div className="w-full relative flex justify-center items-center md:h-[600px] flex-col">
          {ApiError ? (
            <div className="mt-5 rounded-3xl font-extrabold text-xl p-3 max-w-sm m-auto bg-red-500 text-center md:flex md:flex-wrap md:justify-around md:items-center animate-bounce">
              {ApiError}
            </div>
          ) : null}
          <div className="md:flex md:flex-wrap md:justify-around md:items-center">
            <div className="form-control w-[50%]">
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                value={formik.values.resetCode}
                name="resetCode"
                id="resetCode"
                required
              />
              <label id="resetCode" className="form-label">
                <span style={{ transitionDelay: "0ms" }}>r</span>
                <span style={{ transitionDelay: "50ms" }}>e</span>
                <span style={{ transitionDelay: "100ms" }}>s</span>
                <span style={{ transitionDelay: "150ms" }}>e</span>
                <span style={{ transitionDelay: "200ms" }}>t</span>
                <span style={{ transitionDelay: "200ms" }}>C</span>
                <span style={{ transitionDelay: "200ms" }}>o</span>
                <span style={{ transitionDelay: "200ms" }}>d</span>
                <span style={{ transitionDelay: "200ms" }}>e</span>
              </label>
              {formik.errors.resetCode && formik.touched.resetCode ? (
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
                    Error - {formik.errors.resetCode}.
                  </p>
                </div>
              ) : null}
              {!formik.errors.resetCode && formik.touched.resetCode ? (
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
            <div className="button py-10 md:py-0 md:flex md:flex-wrap md:justify-around md:items-center flex-col">
              <button
                type="submit"
                className="uppercase form-submit-button flex items-center justify-center text-white tracking-wider font-serif font-extrabold"
              >
                {isLoading ? (
                  <span className="flex justify-center items-center size-10">
                    <RotatingLines />
                  </span>
                ) : (
                  "Register"
                )}
              </button>
              <Link
                to="/Register"
                className="flex items-center justify-center underline text-blue-600"
              >
                <span className="my-5">Don't you Have An Account ?</span>
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

export default ResetCode;
