import "./App.css";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Component/layout/layout";
import Products from "./Component/products/products";
import NotFound from "./Component/NotFound/NotFound";
import Login from "./Component/login/login";
import Register from "./Component/Register/Register";
import Home from "./Component/Home/Home";
import Cart from "./Component/Cart/Cart";
import Categories from "./Component/Categories/Categories";
import CounterContextProvider from "./context/counterContext";
import UserContextProvider from "./context/userContext";
import ProtectedRouts from "./Component/ProtectedRouts/ProtectedRouts";
import ProductDetails from "./Component/ProductDetails/ProductDetails";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "./../node_modules/@tanstack/react-query-devtools/src/index";
import AddCartContextProvider from "./context/addCartContext";
import { ToastContainer } from "react-toastify";
import Checkout from "./Component/Checkout/Checkout";
import { CheckoutInfoProvider } from "./context/checkoutContext";
import Allorders from "./Component/Allorders/Allorders";
import OredrscontextProvider from "./context/ordersContext";
import Brands from "./Component/Brands/Brands";
import WishlistItemsProvider from "./context/wishlistContext";
import Wishlist from "./Component/Wishlist/Wishlist";
import ForgetPassword from "./Component/ForgetPassword/ForgetPassword";
import ResetCode from "./Component/ResetCode/ResetCode";
import RePassword from "./Component/RePassword/RePassword";

let routing = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRouts>
            {" "}
            <Home />{" "}
          </ProtectedRouts>
        ),
      },
      {
        path: "products",
        element: (
          <ProtectedRouts>
            <Products />{" "}
          </ProtectedRouts>
        ),
      },
      { path: "*", element: <NotFound /> },
      { path: "Login", element: <Login /> },
      { path: "Register", element: <Register /> },
      { path: "ForgetPassword", element: <ForgetPassword /> },
      { path: "ResetCode", element: <ResetCode /> },
      { path: "RePassword", element: <RePassword /> },
      {
        path: "Cart",
        element: (
          <ProtectedRouts>
            <Cart />{" "}
          </ProtectedRouts>
        ),
      },
      {
        path: "checkout",
        element: (
          <ProtectedRouts>
            <Checkout />{" "}
          </ProtectedRouts>
        ),
      },
      {
        path: "ProductDetails/:id/:category",
        element: (
          <ProtectedRouts>
            <ProductDetails />{" "}
          </ProtectedRouts>
        ),
      },
      {
        path: "Categories",
        element: (
          <ProtectedRouts>
            <Categories />{" "}
          </ProtectedRouts>
        ),
      },
      {
        path: "brands",
        element: (
          <ProtectedRouts>
            <Brands />{" "}
          </ProtectedRouts>
        ),
      },
      {
        path: "wishlist",
        element: (
          <ProtectedRouts>
            <Wishlist />{" "}
          </ProtectedRouts>
        ),
      },
      {
        path: "allorders",
        element: (
          <ProtectedRouts>
            <Allorders />{" "}
          </ProtectedRouts>
        ),
      },
    ],
  },
]);

let query = new QueryClient();
function App() {
  return (
    <>
      <UserContextProvider>
        <CounterContextProvider>
          <QueryClientProvider client={query}>
            <AddCartContextProvider>
              <CheckoutInfoProvider>
                <OredrscontextProvider>
                  <WishlistItemsProvider>
                    <RouterProvider router={routing}></RouterProvider>
                    <ToastContainer />
                  </WishlistItemsProvider>
                </OredrscontextProvider>
              </CheckoutInfoProvider>
            </AddCartContextProvider>
            <ReactQueryDevtools />
          </QueryClientProvider>
        </CounterContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
