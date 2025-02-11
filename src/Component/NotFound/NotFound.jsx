import React from "react";
import NotFoundpage from "../../assets/error.svg";
export default function NotFound() {
  return (
    <>
      <div className="min-h-screen flex bg-[#F8E4B3]  min-w-screen  items-center justify-center">
        <img className="lg:w-[50%] px-6" src={NotFoundpage} alt="NotFoundpage" />
      </div>
      
    </>
  );
}
