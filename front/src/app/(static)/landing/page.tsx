import React from "react";
import { products } from "@/helpers/products";
import { FaMusic } from "react-icons/fa6";
import Button from "@/components/ui/button";
import { routes } from "@/routes";

const PageLanding = () => {
  const cart = products.slice(0, 3);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-br from-blue-100 to-white">
     <a href={routes.home}>
      <h1 className="flex items-center gap-2 text-3xl font-bold tracking-wide text-primary-900"><FaMusic />
        BEATLINE 
      </h1>
      </a>
      <p className="max-w-xl mb-8 text-lg text-center text-gray-600">
        Descubre nuestros productos exclusivos y aprovecha las mejores ofertas.
        ¡Haz tu compra hoy y lleva tu experiencia al siguiente nivel!
      </p>
      <div className="grid w-full max-w-4xl grid-cols-1 gap-8 mb-10 md:grid-cols-2">
        {cart.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl"
            >
              <img
                src={product.image}
                alt={product.name}
                className="object-contain w-32 h-32 mb-4"
              />
              <h2 className="mb-2 text-2xl font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="mb-4 text-gray-600">{product.description}</p>
                <div className="flex items-center gap-4 mb-4">
                <span className="text-xl font-bold text-primary-400">
                  ${product.price}
                </span>
                <Button
                  label="¡Lo quiero!"
                  className="px-4 py-1.5 font-semibold text-white transition duration-200 rounded shadow-md bg-primary-300 hover:bg-primary-300 text-sm"
                />
                </div>
            </div>
        ))}
      </div>
      <a
        href="#"
        className="px-8 py-3 text-lg font-bold text-white transition duration-200 bg-green-500 rounded-full shadow-lg hover:bg-green-600"
      >
        Comprar ahora
      </a>
    </div>
  );
};

export default PageLanding;
