import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "./Brands.module.css";
import Loader from "../Loader/Loader";

export default function Brands() {
  const [Showbrands, setShowbrands] = useState(null);
  async function Allbrands() {
    let { data } = await axios
      .get(`https://ecommerce.routemisr.com/api/v1/brands`)
      .then((res) => res)
      .catch((err) => err);
    setShowbrands(data.data);
  }

  useEffect(() => {
    Allbrands();
  }, []);
  if (Showbrands==null) return <Loader />;
  return (
    <>
      <div className="flex w-full flex-wrap items-center justify-center">
        {" "}
        {Showbrands?.map((brand) => (
          <div
            key={brand._id}
            className="lg:w-1/5 cursor-pointer w-full px-6 py-3  "
          >
            <div className={`${styled.card}`}>
              <div className={`${styled.cardoverlay}`} />

              <div className={`${styled.cardinner}`}>
                <h1 className="text-black text-opacity-25"> {brand.name}</h1>
                <img src={brand.image} class="img-fluid w-full rounded-top" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
