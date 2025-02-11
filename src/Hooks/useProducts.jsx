import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";

export default function useProducts() {
  function TheProducts() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }
  let ProductInfo = new useQuery({
    queryKey: ["products"],
    queryFn: TheProducts,
    staleTime: 10000,
    select: (data) => data.data.data,
    refetchOnWindowFocus: true,
    gcTime: 5000,
  });

  return ProductInfo;
}
