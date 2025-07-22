'use client'
import React, { FC } from 'react';
import Button from '../button';
import Link from 'next/link';
import { routes } from '@/routes';
import { useAuthContext } from '@/context/authContext';
import { IProduct } from '@/types';
import { useCartContext } from '@/context/cartContext';
import Loader from '../loader/loader';
import { toast } from 'react-toastify';

const AddCartButton: FC<{ product: Partial<IProduct> }> = ({ product }) => {
  const { isAuth } = useAuthContext();
  const { addToCart, isProductInCart } = useCartContext();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
     addToCart(product);

     return toast.success('Producto agregado al carrito', {
      autoClose: 1500
  });
}
  if (isAuth==null){
    return <Loader/>
  }

  if (isAuth == false) {
    return (
      <div className="w-full p-4 mt-auto border rounded-md bg-primary-100 border-primary-200">
        <p className="text-sm text-center text-primary-700">
          Por favor&nbsp;
          <Link
           onClick={(e) => e.stopPropagation()}
            href={routes.login}
            className="font-semibold underline text-primary-600 hover:text-primary-800"
          >
            inicia sesión
          </Link>
          &nbsp;para agregar productos al carrito.
        </p>
      </div>
    );
  }
if (isProductInCart && isProductInCart(product?.id || 0)) {
  return (
    <Button
      className="w-full mt-auto"
      label="Producto ya en el carrito"
      disabled
      variant="outline"
    />
  );
}

if (product?.stock === 0) {
  return (
    <Button
      className="w-full mt-auto"
      label="Sin stock"
      disabled
      variant="outline"
    />
  );
}

  return (
    <div className="w-full mt-auto">
      <Button
        className="w-full mt-auto"
        variant="primary"
        label="Agregar al carrito"
        onClick={handleAddToCart}
      />
    </div>
  );
};

export default AddCartButton;
