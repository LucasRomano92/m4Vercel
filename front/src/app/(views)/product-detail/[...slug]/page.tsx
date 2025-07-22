import React from "react";

import { routes } from "@/routes";
import { redirect } from "next/navigation"; // ✅ Usar directamente desde "next/navigation"
import { getProductById } from "@/services/products";
import AddCartButton from "@/components/ui/product-card/add-cart-button";

interface PageProps {
  params: {
    slug?: string[];
  };
}

export default async function Page({ params }: PageProps) {
  const slug = params.slug ?? []; // ✅ sin Promise.resolve
  const [id] = slug;

  const product = await getProductById(Number(id));
  if (!product) {
    redirect(routes.products);
  }

  return (
    <div className="max-w-2xl mx-auto my-10 overflow-hidden border border-gray-200 shadow-lg bg-primary-200 rounded-xl">
      <div className="flex flex-col md:flex-row">
        {product.image && (
          <div className="flex items-center justify-center p-6 md:w-1/2 bg-primary-200">
            <img
              src={product.image}
              alt={product.name}
              className="object-contain w-full h-64 rounded-lg shadow"
            />
          </div>
        )}
        <div className="flex flex-col justify-between p-6 md:w-1/2">
          <div>
            <h1 className="mb-2 text-3xl font-extrabold text-gray-900">
              {product.name}
            </h1>
            <p className="mb-4 text-gray-700">{product.description}</p>
          </div>
          <div className="flex items-center justify-between gap-4 mt-4">
            <span className="text-xl font-bold text-primary-700">
              ${product.price}
            </span>
            <AddCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
