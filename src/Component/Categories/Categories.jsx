import axios, { Axios } from "axios";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "../RecentProduct/RecentProduct.module.css";
import "aos/dist/aos.css";
import "animate.css";
import Aos from "aos";
export default function Categories() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [Categorie, setCategorie] = useState(null);
  async function CategoriesProducts(params) {
    let myCategories = await axios
      .get(`https://ecommerce.routemisr.com/api/v1/categories`)
      .then((res) => res)
      .catch((res) => res);
    setCategorie(myCategories.data.data);
  }
  useEffect(() => {
    CategoriesProducts();
  }, []);

  if (Categorie == null) {
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
  }
  return (
    <>
      <div className="px-5 flex  justify-center items-center flex-wrap gap-4 py-2 my-2">
        {Categorie?.map((product) => (
          <div
           data-aos="zoom-in-right"
            key={product.id}
            className="card2  overflow-hidden group w-full sm:w-6/12 md:w-4/12 lg:w-3/12 xl:w-2/12"
          >
            <Link to="">
              <div className="image">
                <img
                  src={product?.image}
                  className="w-full "
                  alt={product.name}
                />
              </div>
            </Link>

            <div className="radio-categories ">
              <div className="Name bg productTitle">{product?.name}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
