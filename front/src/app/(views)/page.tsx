import {getProducts} from "@/services/products";
import React from "react";
import ProductsList from "./(home)/components/products-list";

export default async function Home() {
  const products = await getProducts();

  return (
    <div>
    <section className="relative flex items-center justify-center w-full overflow-hidden bg-gray-100 h-96">
        <img
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
            alt="Hero Image"
            className="absolute inset-0 z-0 object-cover w-full h-full opacity-80"
            style={{ objectFit: "cover" }}
        />
       
        <div className="relative z-10 flex flex-col items-center justify-center w-full text-center">
            <h1 className="text-4xl font-bold text-white md:text-6xl drop-shadow-lg">
                Bienvenidos a BEATLINE
            </h1>
            <p className="mt-4 text-lg text-white md:text-2xl drop-shadow">
                Descubre nuestros productos y ofertas
            </p>
        </div>
    </section>
      <div className="py-8 mx-auto max-w-7xl">
        <h2 className="mb-4 text-2xl font-bold">Productos destacados</h2>
        <ProductsList products={products} />
      </div>
    </div>
  );
}
