import React from "react";
import Slider from "react-slick";
import photo1 from "../../assets/magicstudio-art1.jpg";
import photo2 from "../../assets/magicstudio-art2.jpg";
import photo3 from "../../assets/magicstudio-art2.jpg";
import slider1 from "../../assets/slider-image-1.jpeg";
import slider2 from "../../assets/slider-image-2.jpeg";
import slider3 from "../../assets/slider-image-3.jpeg";
import bog1 from "../../assets/blog-img-1.jpeg";
import bog2 from "../../assets/blog-img-2.jpeg";
import food1 from "../../assets/food1.webp";
import food2 from "../../assets/food3.png";
import food3 from "../../assets/food5.png";


export default function MainSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 3000,
    autoplay: true,
  };
  var settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 4000,
    autoplay: true,
  };
  var settings3 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 3000,
    autoplay: true,
  };
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full  ">
        {/* Main Slider */}
        <div className="lg:w-3/4 w-full cursor-pointer mb-7  ">
          <Slider {...settings}>
            <img
              src={photo3}
              className="w-full h-[300px] lg:h-[400px] object-cover rounded-s-xl"
              alt=""
            />
            <img
              src={photo2}
              className="w-full h-[300px] lg:h-[400px] object-cover rounded-s-xl"
              alt=""
            />
            <img
              src={photo1}
              className="w-full h-[300px] lg:h-[400px] object-cover rounded-s-xl"
              alt=""
            />
            <img
              src={slider1}
              className="w-full h-[300px] lg:h-[400px] object-cover rounded-s-xl"
              alt=""
            />
            <img
              src={slider2}
              className="w-full h-[300px] lg:h-[400px] object-cover rounded-s-xl"
              alt=""
            />
            <img
              src={slider3}
              className="w-full h-[300px] lg:h-[400px] object-cover rounded-s-xl"
              alt=""
            />
            <img
              src={bog2}
              className="w-full h-[300px] lg:h-[400px] object-cover rounded-s-xl"
              alt=""
            />
            <img
              src={bog1}
              className="w-full h-[300px] lg:h-[400px] object-cover rounded-s-xl"
              alt=""
            />
            <img
              src={food1}
              className="w-full h-[300px] lg:h-[400px] object-cover rounded-s-xl"
              alt=""
            />
          </Slider>
        </div>

        {/* Small Sliders */}
        <div className="lg:w-1/4 w-full flex flex-col cursor-pointer">
          <Slider {...settings2}>
            <img
              src={photo3}
              className="w-full h-[150px] lg:h-[200px] object-cover rounded-e-xl"
              alt=""
            />
            <img
              src={photo2}
              className="w-full h-[150px] lg:h-[200px] object-cover rounded-e-xl"
              alt=""
            />
            <img
              src={slider1}
              className="w-full h-[150px] lg:h-[200px] object-cover rounded-e-xl"
              alt=""
            />
            <img
              src={slider2}
              className="w-full h-[150px] lg:h-[200px] object-cover rounded-e-xl"
              alt=""
            />
            <img
              src={slider3}
              className="w-full h-[150px] lg:h-[200px] object-cover rounded-e-xl"
              alt=""
            />
          </Slider>
          <Slider {...settings3}>
            <img
              src={slider3}
              className="w-full h-[150px] lg:h-[200px] object-cover rounded-e-xl"
              alt=""
            />
            <img
              src={slider2}
              className="w-full h-[150px] lg:h-[200px] object-cover rounded-e-xl"
              alt=""
            />
            <img
              src={slider1}
              className="w-full h-[150px] lg:h-[200px] object-cover rounded-e-xl"
              alt=""
            />
            <img
              src={food2}
              className="w-full h-[150px] lg:h-[200px] object-cover rounded-e-xl"
              alt=""
            />
            <img
              src={food3}
              className="w-full h-[150px] lg:h-[200px] object-cover rounded-e-xl"
              alt=""
            />
          </Slider>
        </div>
      </div>
    </>
  );
}
