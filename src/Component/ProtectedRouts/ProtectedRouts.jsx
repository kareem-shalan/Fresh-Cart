import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRouts(props) {
  if (localStorage.getItem("UserToken")) {
    return props.children;
  } else {
    return <Navigate to={"/Login"} />;
  }
}
