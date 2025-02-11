import React from "react";
import RecentProduct from "./../RecentProduct/RecentProduct";
import CategoriesSlider from "./../CategoriesSlider/CategoriesSlider";
import MainSlider from './../MainSlider/MainSlider';

export default function Home() {
  return (
    <div>
      <MainSlider/>
      <CategoriesSlider />
      <RecentProduct />
    </div>
  );
}
