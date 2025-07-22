import React from 'react'
import {categories} from '@/helpers/categories';
import ProductsList from '../(home)/components/products-list';
import { getProdutsByCategory } from '@/services/products';
import Link from 'next/link';
import { routes } from '@/routes';
import clsx from 'clsx'


async function ProductsPage({
  searchParams,
}: {
  searchParams?: Promise<SearchParams<{ category: string }>>
}) {
  const resolvedSearchParams = await searchParams;
  const { category = undefined } = resolvedSearchParams || {};

  const products = await getProdutsByCategory(category || 'all');


  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      {/* Categorías a la izquierda */}
      <aside style={{ minWidth: '200px' }}>
        <h2 className='mb-3 font-bold'>Categorías</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <Link href={routes.products + `?category=all`}>
              <span className={clsx({ 'font-bold': 'all' === category, })}>Ver todas</span>
            </Link>
          </li>
          {categories.map((currentCategory) => (
            <li key={currentCategory.id}>
              <Link href={routes.products + `?category=${currentCategory.id}`}>
                <span className={clsx({ 'font-bold': currentCategory.id.toLocaleString() === category, })}>
                  {currentCategory.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      {/* Productos a la derecha */}
      <main style={{ flex: 1 }}>
        <h1 className='mb-3 font-bold'>Productos</h1>
        <ProductsList products={products} />
      </main>
    </div>
  );
};
export default ProductsPage;


