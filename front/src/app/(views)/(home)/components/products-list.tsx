import React, { FC } from "react";
import ProductCard from "@/components/ui/product-card/product-card";
import { IProduct } from "@/types";

interface ProductsListProps {
  products: IProduct[];
}

const ProductsList: FC<ProductsListProps> = ({ products }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 p-4 bg-primary-500 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products?.map((product) => (
          <div
            key={product.id}
            className="transition-transform duration-200 hover:scale-105"
          >
            <ProductCard {...product} />
          </div>
        ))}
        {!products?.length && <span>No hay productos para mostrar</span>}
      </div>
    </>
  );
};

export default ProductsList;
