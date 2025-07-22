'use server'
import { CreateOrderDto } from "@/types";
import axiosApiBack from "axios";


export const postOrder = async (token: string, body: CreateOrderDto) => {
    try {
        const API_URL = process.env.API_URL;
        const response = await axiosApiBack.post(`${API_URL}/orders`, body, {
            headers: {
                Authorization: token,
            }
        });
        


        if (!response.data) {
            console.warn('Order not created', response.data);
            return {
                message: 'No se pudo crear la orden',
                error: response?.data || 'Error desconocido',
            };
        }
        return response.data;
    } catch (error) {
       if (error instanceof Error) {
            console.warn('Error creating order products:', error?.message);
        
        return {
                message: 'No se pudo crear la orden',
                error: error?.message || 'Error desconocido',
            };
        }
        return  null; 
    }
};



export const getUserOrders = async (token: string) => {
    try {
        const API_URL = process.env.API_URL;
        const response = await axiosApiBack.get(`${API_URL}/users/orders`,{
              headers: {
                Authorization: token,
            }
        });

        if (!response.data || !Array.isArray(response.data)) {
            console.warn('invalid orders data format', response.data);
            return [];
        }
        return response.data;
    } catch (error) {
        console.error('Error fetching orders list', error);
        return [];
    }
}
// el backen toma el token que vos le mandas, decifra a que usuario corresponde ese token y despues busca las ordenes que estan relacionadas con ese id de usuario
