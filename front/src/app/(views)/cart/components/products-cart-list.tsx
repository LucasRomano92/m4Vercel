"use client";
import { useCartContext } from "@/context/cartContext";
import React from "react";
import ProductCardCart from "./product-card-cart";
import Loader from "@/components/ui/loader/loader";

const ProductsCartList = () => {
  const { cart, priceTotal } = useCartContext();

  if (cart === null) {
    return <Loader />;
  }

  return (
    <>
      <ul>
        {cart?.map((product) => (
          <ProductCardCart key={product.id} {...(product || null)} />
        ))}
      </ul>
      <h2>Total: ${priceTotal()}</h2>
    </>
  );
};

export default ProductsCartList;
