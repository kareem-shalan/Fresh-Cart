import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className=" relative bottom-0 left-0 right-0 text-slate-400 py-12 bg-gradient-to-t  to-gray-700 shadow-[0_-10px_20px_rgba(0,0,0,0.3)] z-50000 ">
      <div className="container mx-auto px-6   ">
        {/* Footer Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 ">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4  after:block after:w-full after:h-[2px] after:bg-red-600 after:mt-2 ">
              About Our Store
            </h3>
            <p className="text-gray-400 text-sm mb-4 font-serif">
              We are a leading online store providing the best quality products.
              Discover our wide selection of products to meet all your needs.
            </p>
            <div className="flex space-x-4">
              <div></div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 after:block after:w-full after:h-[2px] after:bg-red-600 after:mt-2">
              Quick Links
            </h3>
            <ul className="text-gray-400  text-sm flex  items-center justify-center gap-2">
              <li>
                <Link
                  to=""
                  className="hover:text-blue-600 font-bold transition-all"
                >
                  <i class="fas fa-star text-yellow-400 mr-2"></i>
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="Categories"
                  className="hover:text-blue-600 font-bold transition-all"
                >
                  <i class="fas fa-star text-yellow-400 mr-2"></i>
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to="brands"
                  className="hover:text-blue-600 font-bold transition-all"
                >
                  <i class="fas fa-star text-yellow-400 mr-2"></i>
                  Brands
                </Link>
              </li>
              <li>
                <Link
                  to="wishlist"
                  className="hover:text-blue-600 font-bold transition-all"
                >
                  <i class="fas fa-star text-yellow-400 mr-2"></i>
                  Wishlist
                </Link>
              </li>
              <li>
                <Link
                  to="cart"
                  className="hover:text-blue-600 font-bold transition-all"
                >
                  <i class="fas fa-star text-yellow-400 mr-2"></i>
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-2xl font-semibold mb-4 after:block after:w-full after:h-[2px] after:bg-red-600 after:mt-2">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest updates, offers, and product news directly to your
              inbox.
            </p>
            <ul className=" gap-3   hidden sm:flex md:visible">
              <li>
                <Link
                  to="https://www.facebook.com/kemo.mohamed.31586"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#2dadfc"
                      d="M8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s8-3.582,8-8S12.418,0,8,0z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M9.082,10.12h2.071l0.326-2.104H9.082V6.868c0-0.875,0.286-1.65,1.104-1.65h1.312V3.383	c-0.23-0.03-0.719-0.099-1.641-0.099c-1.924,0-3.054,1.016-3.054,3.334v1.398H4.824v2.104h1.979v5.781C7.196,15.961,7.592,16,8,16	c0.368,0,0.729-0.033,1.082-0.082V10.12z"
                    ></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.youtube.com/@Kareem_Shalan_Official"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#455A64"
                      d="M14.539 6h2.125l1.37 5.496h.133l1.308-5.493h2.147l-2.458 8.036V20h-2.112v-5.703L14.539 6zM21.525 11.923c0-.784.254-1.411.759-1.874.504-.466 1.182-.7 2.035-.7.778 0 1.413.245 1.908.737.495.488.743 1.121.743 1.894v5.235c0 .866-.242 1.548-.728 2.044C25.756 19.753 25.09 20 24.235 20c-.823 0-1.477-.259-1.974-.767-.493-.508-.738-1.194-.738-2.055v-5.256H21.525zM23.455 17.368c0 .275.066.494.205.646.132.15.322.226.571.226.255 0 .454-.077.604-.234.149-.151.226-.366.226-.638v-5.522c0-.22-.079-.399-.231-.536-.151-.135-.352-.205-.599-.205-.229 0-.417.07-.561.205-.143.137-.215.316-.215.536V17.368zM33.918 9.605V20h-1.875v-1.266c-.346.414-.705.728-1.081.941C30.59 19.89 30.227 20 29.876 20c-.435 0-.76-.149-.981-.452-.221-.3-.329-.751-.329-1.357V9.605h1.874v7.886c0 .236.04.41.12.519.075.104.207.162.38.162.141 0 .315-.071.522-.215.213-.141.406-.324.581-.544V9.605H33.918z"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M38.799,26.439c0-2.342-1.94-4.24-4.329-4.24c-3.412-0.143-6.905-0.203-10.47-0.198c-3.563-0.005-7.056,0.056-10.47,0.198c-2.387,0-4.327,1.898-4.327,4.24C9.061,28.291,8.995,30.145,9,32.001c-0.005,1.853,0.06,3.707,0.204,5.561c0,2.345,1.938,4.243,4.326,4.243c3.414,0.14,6.907,0.2,10.47,0.195c3.564,0.008,7.058-0.056,10.47-0.195c2.389,0,4.329-1.898,4.329-4.243c0.142-1.854,0.209-3.708,0.201-5.561C39.008,30.145,38.941,28.291,38.799,26.439z"
                    ></path>
                    <g>
                      <path
                        fill="#F44336"
                        d="M33.851 30.346c-.219 0-.368.058-.458.18-.064.091-.145.299-.145.752v.774h1.193v-.774c0-.446-.083-.655-.151-.757C34.205 30.402 34.061 30.346 33.851 30.346zM26.865 30.386c-.086.042-.17.105-.258.193v5.876c.11.111.217.191.316.242.111.055.224.08.346.08.231 0 .303-.091.326-.123.057-.071.119-.219.119-.54v-5.005c0-.278-.053-.493-.152-.625C27.428 30.306 27.164 30.236 26.865 30.386z"
                      ></path>
                      <path
                        fill="#F44336"
                        d="M38.799,26.439c0-2.342-1.94-4.24-4.329-4.24c-3.412-0.143-6.905-0.203-10.47-0.198c-3.563-0.005-7.056,0.056-10.47,0.198c-2.387,0-4.327,1.898-4.327,4.24C9.061,28.291,8.995,30.145,9,32.001c-0.005,1.853,0.06,3.707,0.204,5.561c0,2.345,1.938,4.243,4.326,4.243c3.414,0.14,6.907,0.2,10.47,0.195c3.564,0.008,7.058-0.056,10.47-0.195c2.389,0,4.329-1.898,4.329-4.243c0.142-1.854,0.209-3.708,0.201-5.561C39.008,30.145,38.941,28.291,38.799,26.439z M15.701,38.382c0,0.111-0.092,0.204-0.206,0.204h-2.049c-0.114,0-0.206-0.093-0.206-0.204v-11.03h-1.914c-0.113,0-0.205-0.092-0.205-0.203v-1.904c0-0.112,0.092-0.204,0.205-0.204h6.291c0.114,0,0.206,0.092,0.206,0.204v1.904c0,0.111-0.091,0.203-0.206,0.203h-1.916V38.382z M22.995,38.382c0,0.111-0.092,0.204-0.206,0.204h-1.822c-0.114,0-0.206-0.093-0.206-0.204v-0.551c-0.243,0.233-0.486,0.418-0.738,0.56c-0.397,0.227-0.776,0.336-1.16,0.336c-0.488,0-0.864-0.176-1.117-0.517c-0.238-0.324-0.361-0.803-0.361-1.421v-8.1c0-0.112,0.092-0.204,0.207-0.204h1.821c0.114,0,0.206,0.092,0.206,0.204v7.428c0,0.244,0.044,0.343,0.072,0.382c0.013,0.017,0.05,0.067,0.205,0.067c0.052,0,0.172-0.022,0.389-0.169c0.176-0.115,0.334-0.259,0.473-0.425v-7.283c0-0.112,0.092-0.204,0.207-0.204h1.821c0.114,0,0.206,0.092,0.206,0.204v9.692H22.995z M30,36.373c0,0.736-0.159,1.31-0.473,1.708c-0.326,0.418-0.797,0.626-1.398,0.626c-0.383,0-0.733-0.077-1.046-0.233c-0.166-0.083-0.327-0.191-0.479-0.325v0.233c0,0.114-0.093,0.204-0.206,0.204h-1.837c-0.114,0-0.207-0.09-0.207-0.204v-13.14c0-0.112,0.092-0.203,0.207-0.203h1.837c0.113,0,0.206,0.091,0.206,0.203v3.717c0.15-0.136,0.31-0.25,0.474-0.343c0.309-0.17,0.625-0.256,0.941-0.256c0.641,0,1.143,0.238,1.484,0.706c0.328,0.45,0.495,1.101,0.495,1.933L30,36.373L30,36.373z M36.729,33.765c0,0.113-0.093,0.205-0.207,0.205h-3.273v1.621c0,0.592,0.082,0.845,0.148,0.951c0.053,0.088,0.152,0.199,0.438,0.199c0.23,0,0.388-0.055,0.469-0.164c0.037-0.058,0.139-0.28,0.139-0.988v-0.675c0-0.114,0.093-0.204,0.207-0.204h1.872c0.114,0,0.205,0.09,0.205,0.204v0.729c0,1.044-0.249,1.844-0.737,2.384c-0.49,0.543-1.23,0.82-2.198,0.82c-0.872,0-1.574-0.296-2.079-0.871c-0.5-0.571-0.755-1.354-0.755-2.333v-4.352c0-0.892,0.278-1.63,0.83-2.196c0.55-0.568,1.274-0.857,2.144-0.857c0.89,0,1.587,0.271,2.072,0.803c0.48,0.526,0.724,1.284,0.724,2.251v2.474H36.729z"
                      ></path>
                    </g>
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#03a9f4"
                      d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M36,17.12c-0.882,0.391-1.999,0.758-3,0.88c1.018-0.604,2.633-1.862,3-3 c-0.951,0.559-2.671,1.156-3.793,1.372C31.311,15.422,30.033,15,28.617,15C25.897,15,24,17.305,24,20v2c-4,0-7.9-3.047-10.327-6 c-0.427,0.721-0.667,1.565-0.667,2.457c0,1.819,1.671,3.665,2.994,4.543c-0.807-0.025-2.335-0.641-3-1c0,0.016,0,0.036,0,0.057 c0,2.367,1.661,3.974,3.912,4.422C16.501,26.592,16,27,14.072,27c0.626,1.935,3.773,2.958,5.928,3c-1.686,1.307-4.692,2-7,2 c-0.399,0-0.615,0.022-1-0.023C14.178,33.357,17.22,34,20,34c9.057,0,14-6.918,14-13.37c0-0.212-0.007-0.922-0.018-1.13 C34.95,18.818,35.342,18.104,36,17.12"
                    ></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="https://github.com/kareem-shalan" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"
                    ></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.instagram.com/kemo_shalan/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 64 64"
                  >
                    <radialGradient
                      id="TGwjmZMm2W~B4yrgup6jda_119026_gr1"
                      cx="32"
                      cy="32.5"
                      r="31.259"
                      gradientTransform="matrix(1 0 0 -1 0 64)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#efdcb1"></stop>
                      <stop offset="0" stopColor="#f2e0bb"></stop>
                      <stop offset=".011" stopColor="#f2e0bc"></stop>
                      <stop offset=".362" stopColor="#f9edd2"></stop>
                      <stop offset=".699" stopColor="#fef4df"></stop>
                      <stop offset="1" stopColor="#fff7e4"></stop>
                    </radialGradient>
                    <path
                      fill="url(#TGwjmZMm2W~B4yrgup6jda_119026_gr1)"
                      d="M58,54c-1.1,0-2-0.9-2-2s0.9-2,2-2h2.5c1.9,0,3.5-1.6,3.5-3.5S62.4,43,60.5,43H50c-1.4,0-2.5-1.1-2.5-2.5	S48.6,38,50,38h8c1.7,0,3-1.3,3-3s-1.3-3-3-3H42v-6h18c2.3,0,4.2-2,4-4.4c-0.2-2.1-2.1-3.6-4.2-3.6H58c-1.1,0-2-0.9-2-2s0.9-2,2-2	h0.4c1.3,0,2.5-0.9,2.6-2.2c0.2-1.5-1-2.8-2.5-2.8h-14C43.7,9,43,8.3,43,7.5S43.7,6,44.5,6h3.9c1.3,0,2.5-0.9,2.6-2.2	C51.1,2.3,50,1,48.5,1H15.6c-1.3,0-2.5,0.9-2.6,2.2C12.9,4.7,14,6,15.5,6H19c1.1,0,2,0.9,2,2s-0.9,2-2,2H6.2c-2.1,0-4,1.5-4.2,3.6	C1.8,16,3.7,18,6,18h2.5c1.9,0,3.5,1.6,3.5,3.5S10.4,25,8.5,25H5.2c-2.1,0-4,1.5-4.2,3.6C0.8,31,2.7,33,5,33h17v11H6	c-1.7,0-3,1.3-3,3s1.3,3,3,3l0,0c1.1,0,2,0.9,2,2s-0.9,2-2,2H4.2c-2.1,0-4,1.5-4.2,3.6C-0.2,60,1.7,62,4,62h53.8	c2.1,0,4-1.5,4.2-3.6C62.2,56,60.3,54,58,54z"
                    ></path>
                    <radialGradient
                      id="TGwjmZMm2W~B4yrgup6jdb_119026_gr2"
                      cx="18.51"
                      cy="66.293"
                      r="69.648"
                      gradientTransform="matrix(.6435 -.7654 .5056 .4251 -26.92 52.282)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset=".073" stopColor="#eacc7b"></stop>
                      <stop offset=".184" stopColor="#ecaa59"></stop>
                      <stop offset=".307" stopColor="#ef802e"></stop>
                      <stop offset=".358" stopColor="#ef6d3a"></stop>
                      <stop offset=".46" stopColor="#f04b50"></stop>
                      <stop offset=".516" stopColor="#f03e58"></stop>
                      <stop offset=".689" stopColor="#db359e"></stop>
                      <stop offset=".724" stopColor="#ce37a4"></stop>
                      <stop offset=".789" stopColor="#ac3cb4"></stop>
                      <stop offset=".877" stopColor="#7544cf"></stop>
                      <stop offset=".98" stopColor="#2b4ff2"></stop>
                    </radialGradient>
                    <path
                      fill="url(#TGwjmZMm2W~B4yrgup6jdb_119026_gr2)"
                      d="M45,57H19c-5.5,0-10-4.5-10-10V21c0-5.5,4.5-10,10-10h26c5.5,0,10,4.5,10,10v26C55,52.5,50.5,57,45,57z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M32,20c4.6,0,5.1,0,6.9,0.1c1.7,0.1,2.6,0.4,3.2,0.6c0.8,0.3,1.4,0.7,2,1.3c0.6,0.6,1,1.2,1.3,2 c0.2,0.6,0.5,1.5,0.6,3.2C46,28.9,46,29.4,46,34s0,5.1-0.1,6.9c-0.1,1.7-0.4,2.6-0.6,3.2c-0.3,0.8-0.7,1.4-1.3,2 c-0.6,0.6-1.2,1-2,1.3c-0.6,0.2-1.5,0.5-3.2,0.6C37.1,48,36.6,48,32,48s-5.1,0-6.9-0.1c-1.7-0.1-2.6-0.4-3.2-0.6 c-0.8-0.3-1.4-0.7-2-1.3c-0.6-0.6-1-1.2-1.3-2c-0.2-0.6-0.5-1.5-0.6-3.2C18,39.1,18,38.6,18,34s0-5.1,0.1-6.9 c0.1-1.7,0.4-2.6,0.6-3.2c0.3-0.8,0.7-1.4,1.3-2c0.6-0.6,1.2-1,2-1.3c0.6-0.2,1.5-0.5,3.2-0.6C26.9,20,27.4,20,32,20 M32,17 c-4.6,0-5.2,0-7,0.1c-1.8,0.1-3,0.4-4.1,0.8c-1.1,0.4-2.1,1-3,2s-1.5,1.9-2,3c-0.4,1.1-0.7,2.3-0.8,4.1C15,28.8,15,29.4,15,34 s0,5.2,0.1,7c0.1,1.8,0.4,3,0.8,4.1c0.4,1.1,1,2.1,2,3c0.9,0.9,1.9,1.5,3,2c1.1,0.4,2.3,0.7,4.1,0.8c1.8,0.1,2.4,0.1,7,0.1 s5.2,0,7-0.1c1.8-0.1,3-0.4,4.1-0.8c1.1-0.4,2.1-1,3-2c0.9-0.9,1.5-1.9,2-3c0.4-1.1,0.7-2.3,0.8-4.1c0.1-1.8,0.1-2.4,0.1-7 s0-5.2-0.1-7c-0.1-1.8-0.4-3-0.8-4.1c-0.4-1.1-1-2.1-2-3s-1.9-1.5-3-2c-1.1-0.4-2.3-0.7-4.1-0.8C37.2,17,36.6,17,32,17L32,17z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M32,25c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S37,25,32,25z M32,40c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S35.3,40,32,40 z"
                    ></path>
                    <circle cx="41" cy="25" r="2" fill="#fff"></circle>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.linkedin.com/in/kareem-shalan/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#0288D1"
                      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                    ></path>
                  </svg>
                </Link>
              </li>
            </ul>
 
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center   mt-12 border-t border-red-600 pt-8 text-black font-bold text-sm font-serif">
          <p>&copy; 2025 <span onClick={()=>{
           window.scrollTo({ top: 0, behavior: "smooth" });
          }} className="text-blue-600 cursor-pointer">FreshCart</span>. All rights reserved.</p>
          <p>
            Powered by{" "}
            <Link to="#" className="text-purple-600 hover:text-red-500">
             Kareem Shalan
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
