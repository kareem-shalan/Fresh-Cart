import React from "react";
import Nav from "./../Nav/Nav";
import Footer from "./../Footer/Footer";
import { Outlet } from "react-router-dom";
import BackGrround from "../../assets/light-patten.svg";


export default function Layout() {
  return (
    <div 
      style={{ backgroundImage: `url(${BackGrround})` }}
      className="bg-blend-difference   bg-[#9bea8585] bg-cover bg-center "
    >
      <Nav />
      <div className="container    m-auto min-h-screen z-[-5] my-5 py-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
