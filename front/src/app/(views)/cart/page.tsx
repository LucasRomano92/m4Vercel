import React from "react";
import CreateOrder from "./components/create-order";
import ProductsCartList from "./components/products-cart-list";

const CartPage = () => {
  return (
    <div className="p-8 mx-auto my-12 bg-black border border-gray-300 shadow-lg rounded-2xl">
      <div className="flex justify-between w-full">
        <h1>Mi Carrito</h1>
        <CreateOrder />
      </div>
      <ProductsCartList />
    </div>
  );
};

export default CartPage;
