'use client';

import { IProduct } from '@/types';
import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import { routes } from '@/routes';
import AddCartButton from './add-cart-button';

const ProductCard: FC<Partial<IProduct>> = (product) => {
  const { id, name, description, price, image, stock } = product;
  const router = useRouter();

  const handleClick = () => {
    router.push(`${routes.productDetail}/${id}/${name}`);
  };

  return (
    <div
      className="flex flex-col justify-between w-full max-w-sm h-full rounded-lg bg-white dark:bg-gray-800 shadow-md overflow-hidden cursor-pointer transition hover:scale-[1.02]"
      onClick={handleClick}
    >
      <img
        className="object-contain w-full h-48 p-6 bg-white"
        src={image || 'https://via.placeholder.com/150'}
        alt={name || 'Product image'}
      />

      <div className="flex flex-col flex-1 px-5 pb-5">
        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {name || 'Product Name'}
        </h5>
        <p className="flex-1 text-sm text-gray-500 dark:text-gray-400">
          {description || 'Product Description'}
        </p>
        <div className="mt-4 flex items-center gap-2">
          {typeof stock === 'number' && stock > 0 ? (
            <>
              <span className="inline-block w-3 h-3 rounded-full bg-green-500" title="En stock"></span>
              <span className="text-sm text-green-700 font-medium">{stock} disponibles</span>
            </>
          ) : (
            <>
              <span className="inline-block w-3 h-3 rounded-full bg-red-500" title="Sin stock"></span>
              <span className="text-sm text-red-600 font-medium">Sin stock</span>
            </>
          )}
        </div>
        <div className="mt-4">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">${price || '00.00'}</span>
        </div>

        <div className="mt-4">
          <AddCartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
