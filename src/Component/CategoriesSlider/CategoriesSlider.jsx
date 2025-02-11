import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
export default function CategoriesSlider() {
  let [showCategories, setshowCategories] = useState([]);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8, // Default slides to show on larger screens
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 1000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024, // For tablets and small desktop screens
        settings: {
          slidesToShow: 6, // Show 6 slides on medium screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 4, // Show 4 slides on smaller screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For very small screens (e.g., portrait mobile)
        settings: {
          slidesToShow: 2, // Show only 2 slides
          slidesToScroll: 1,
        },
      },
    ],
  };

  function getallCategories() {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/categories`)
      .then((res) => {
        setshowCategories(res.data.data);
        console.log("cateeessssssssssssssssssssssseee", showCategories);
      });
  }
  useEffect(() => {
    getallCategories();
  }, []);

  return (
    <>
    <div className="flex justify-between items-center py-4">
    <h2 className="text-start font-serif capitalize font-bold animate-bounce mt-2 hover:animate-none">
        Shop Popular Categories
      </h2>
      <Link to={"/allorders"} className="mx-5">
        <button class="Btn font-serif  "> 📋Allorders</button>
      </Link>
    </div>
      {
        <Slider {...settings} className="cursor-pointer ">
          {showCategories?.map((categorie) => (
            <div key={categorie._id} className="w-full pb-5  ">
              <div className="w-full">
                <img
                  src={categorie?.image}
                  className="w-full h-[200px] rounded-2xl   object-fill md:object-cover"
                  alt=""
                />
                <div className="">
                  {" "}
                  <h4 className="font-mono font-bold mt-2 ">
                    {categorie?.name}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      }
    </>
  );
}
