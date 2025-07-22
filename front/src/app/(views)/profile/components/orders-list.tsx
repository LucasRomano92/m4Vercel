'use client'
import Loader from '@/components/ui/loader/loader';
import { useAuthContext } from '@/context/authContext';
import { getUserOrders } from '@/services/orders';
import React, { useEffect, useState } from 'react'

import { IOrder } from '@/types';

const OrdersList = () => {
    const [orders, setOrders] = useState<IOrder[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const {token = null} = useAuthContext();

   useEffect(() => {
    const request = async () => {
        try {
            setLoading(true);
            if (token === null){
              throw Error ('token doesnt exist')
            }
          return  setOrders(await getUserOrders(token!))

        } catch (error) {
            console.warn ("Error fetching orders:", error);
            setOrders ([]);
        } finally {
            setLoading(false);
        }
    }
  if (typeof token === "string") {
    request();
  }
   }, [token]);

if (loading){
    return <Loader />;
}

  return (
    <>
      <ul>
        {orders?.map((order) => (
          <li
          key={order.id}
          className="p-6 mb-8 list-none transition-shadow border shadow-sm border-primary-700 rounded-xl bg-neutral-900"
          >
          <div className="flex items-center justify-between mb-4">
            <div>
            <span className="text-lg font-semibold text-white">Orden #{order.id}</span>
            <span
              className={`ml-4 px-3 py-1 rounded-lg font-medium text-sm ${
              order.status === 'approved'
                ? 'bg-green-900 text-green-200'
                : 'bg-yellow-900 text-yellow-200'
              }`}
            >
              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
            </span>
            </div>
            <span className="text-sm text-gray-400">
            {new Date(order.date).toLocaleString()}
            </span>
          </div>
          <div>
            <strong className="text-base text-gray-200">Productos:</strong>
            <ul className="p-0 mt-3">
            {order.products.map(product => (
              <li
              key={product.id}
              className="flex items-center p-3 mb-3 list-none rounded-lg shadow-sm bg-neutral-800"
              >
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-16 h-16 mr-5 bg-black border border-gray-700 rounded-lg"
              />
              <div>
                <div className="text-base font-semibold text-white">{product.name}</div>
                <div className="my-1 text-sm text-gray-400">{product.description}</div>
                <div className="text-sm text-gray-300">
                <span className="mr-4">
                  <strong>Precio:</strong> ${product.price}
                </span>
                <span className="mr-4">
                  <strong>Stock:</strong> {product.stock}
                </span>
                <span>
                  <strong>Categoría:</strong> {product.categoryId}
                </span>
                </div>
              </div>
              </li>
            ))}
            </ul>
          </div>
          </li>
        ))}
      </ul>
      {orders && orders.length === 0 && <span>No hay ordenes para este usuario</span>}
    </>
  )
}

export default OrdersList;