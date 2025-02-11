import React from "react";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div class="loader ">
        <div class="head "></div>

        <div class="flames ">
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
          <div class="particle"></div>
        </div>

        <div class="eye"></div>
      </div>
    </div>
  );
}
