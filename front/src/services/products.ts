'use server';
import { IProduct } from '@/types';
// convierto todas las funciones que yo defina en este archivo en funciones server, server actions
import axios from 'axios';

const axiosApiBack = axios.create({
    baseURL: process.env.API_URL,
});


export const getProducts = async () => {
    
    try {
        const response = await axiosApiBack.get('/products');
        


        if (!response.data || !Array.isArray(response.data)) {
            console.warn('Invalid products data', response.data);
            return [];
        }
        return response.data;
    } catch (error) {
       if (error instanceof Error) {
            console.warn('Error fetching products:', error?.message);
        }
        return [];
    }
};

export const getProductById = async (id: number): Promise<IProduct | null> => {

    try {
        const response = await axiosApiBack.get('/products/' + id);
    

        if (!response.data) {
            console.warn('Invalid product data', response.data);
            return null;
        }
        return response.data;
    } catch (error) {
       if (error instanceof Error) {
            console.warn('Error fetching product:', error?.message);
        }
        return null;
    }
};

     export const getProdutsByCategory = async (
        categoryId: string
     ): Promise<IProduct[]> => {
        try {
            const response = await axiosApiBack.get('/products/category/' + categoryId);
            

            if (!response.data || !Array.isArray(response.data)) {
                console.warn('Invalid products data', response.data);
                return [];
            }
            return response.data;
        } catch (error) {
           if (error instanceof Error) {
                console.warn('Error fetching products by category:', error?.message);
            }
            return [];
        };
     };