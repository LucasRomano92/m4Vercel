"use client";
import { useCartContext } from "@/context/cartContext";
import { IProduct } from "@/types";

import React from "react";

const ProductCardCart = (product: Partial<IProduct> | null) => {
  const { removeFromCart } = useCartContext();
  if (!product) return null;
  return (
    <li
      key={product.id}
      className="flex items-center gap-4 p-4 mb-4 border rounded-lg shadow-sm border-primary-200"
    >
      <img
        src={product.image || "/placeholder.png"}
        alt={product.name}
        className="object-cover w-20 h-20 rounded-lg"
      />
      <div className="flex-1">
        <h2 className="mb-2 text-lg font-semibold">{product.name}</h2>
        <p className="m-0 font-bold">Price: ${product.price}</p>
      </div>
      <button
        className="px-4 py-2 text-white transition bg-red-500 rounded hover:bg-red-600"
        onClick={() => removeFromCart(product.id || 0)}
      >
        Borrar
      </button>
    </li>
  );
};

export default ProductCardCart;
