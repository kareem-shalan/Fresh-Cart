import React, { useContext, useState } from "react";
import { Oredrscontext } from "../../context/ordersContext";
import { useEffect } from "react";
import Aos from "aos";
import NoItemsToshow from "../NoItemsTOshow/NoItemsTOshow";
import CartLoading from "../CartLoading/CartLoading";

export default function Allorders() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [userOrders, setuserOrders] = useState([]);
  let { AllOrders } = useContext(Oredrscontext);
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const toggleOrderDetails = (orderId) => {
    if (expandedOrderId === orderId) {
      setExpandedOrderId(null); // Collapse if already expanded
    } else {
      setExpandedOrderId(orderId); // Expand the clicked order
    }
  };

  async function handelOrders() {
    let res = await AllOrders();

    setuserOrders(res);
  }
  useEffect(() => {
    handelOrders();
  }, []);
  console.log(userOrders);

  return (
    <div className="container mx-auto px-4">
      {userOrders?.length === 0 ? (
        <div className="text-center py-12">
          <NoItemsToshow />
        </div>
      ) : null}
      {userOrders.length > 0 ? (
        userOrders.map((order) => (
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            key={order._id}
            className="bg-white rounded-xl shadow-2xl overflow-hidden mb-8 transform transition-transform hover:scale-105 cursor-pointer"
            onClick={() => toggleOrderDetails(order._id)} // Toggle details on click
          >
            {/* Order Header with Image */}
            <div className="flex justify-start items-center  bg-gradient-to-t from-emerald-600 to-transparent">
              
                <img
                  src={order.cartItems[0]?.product.imageCover} // Use the first product's image
                  alt="Order Header"
                  className=" w-1/2 lg:w-1/3 h-48 object-cover"
                />
             
              <div className="flex flex-col justify-center items-center md:justify-start md:items-start w-1/2 lg:w-1/3 p-6">
                <p className="text-sm text-gray-700 ">
                  <span className="font-bold text-red-600">Paid:</span>{" "}
                  <span
                    className={order.isPaid ? "text-green-600" : "text-red-500"}
                  >
                    {order.isPaid ? "Yes" : "No"}
                  </span>
                </p>

                <h2 className="text-xl break-all md:break-keep font-bold font-mono text-white">
                  Order ID: #{order._id}
                </h2>
                <p className="text-sm text-purple-200 font-serif">
                  Date: {new Date(order.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
            {/* Order Details (Hidden by Default) */}
            <div className={expandedOrderId === order._id ? "block" : "hidden"}>
              {/* Ordered Products */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 font-serif">
                  Ordered Products
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {order.cartItems?.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
                    >
                      <img
                        src={item.product.imageCover}
                        alt="Product"
                        className="w-full object-cover size-1/2 rounded-md mb-4"
                      />
                      <div className="text-center">
                        <p className="font-semibold text-gray-800">
                          {item.product.title}
                        </p>
                        <p className="text-sm text-gray-600">
                          Brand: {item.product.brand.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          Category: {item.product.category.name}
                        </p>
                        <p className="text-sm text-red-600 font-bold">
                          Price: {item.price} EGP
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment & Shipping Details */}
              <div className="p-6 bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Payment & Shipping
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow-xl">
                    <p className="text-sm text-gray-700">
                      <span className="font-bold">Payment Method:</span>{" "}
                      {order.paymentMethodType}
                    </p>
                    <p className="text-sm text-gray-700">
                      <span className="font-bold">Paid:</span>{" "}
                      {order.isPaid ? "Yes" : "No"}
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-lg">
                    <p className="text-sm text-gray-700">
                      <span className="font-bold">Delivered:</span>{" "}
                      {order.isDelivered ? "Yes" : "No"}
                    </p>
                    <p className="text-sm text-gray-700">
                      <span className="font-bold">Total Price:</span>{" "}
                      {order.totalOrderPrice} EGP
                    </p>
                  </div>
                </div>
              </div>

              {/* Customer Information */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Customer Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow-lg">
                    <p className="text-sm text-gray-700">
                      <span className="font-bold">Name:</span>{" "}
                      {order.user?.name}
                    </p>
                    <p className="text-sm text-gray-700">
                      <span className="font-bold">Email:</span>{" "}
                      {order.user?.email}
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-lg">
                    <p className="text-sm text-gray-700">
                      <span className="font-bold">Phone:</span>{" "}
                      {order.user?.phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <CartLoading />
      )}
    </div>
  );
}
