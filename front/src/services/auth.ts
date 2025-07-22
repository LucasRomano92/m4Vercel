'use server'
import axios from "axios"
import { RegisterUserDto } from "../types/index"; // Adjust the path as needed
import { LoginUserDto } from "../types/index"; // Adjust the path as needed
import { LoginServiceResponse } from "./types";
const axiosApiBack = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:3002',
})

export const postRegister = async (data: RegisterUserDto) => {
    try {
            

        const response = await axiosApiBack.post('/users/register', data);
           

        if (!response.data) {
            console.warn("Invalid post register data format", response.data);
            return {
                message: "Error al registrar el usuario",
                errors: response.data,
            }
        }
        return {
            message: "Usuario registrado correctamente",
        }
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.warn("Error fetching post register", error?.message);
            return {
                message: "Error al registrar el usuario",
                errors: (error as Error).message || "Error desconocido",
            }
        }
    }
}

export const postLogin = async (data: LoginUserDto): Promise<LoginServiceResponse> => {
  try {
   
    const response = await axiosApiBack.post('/users/login', data);
    

    if (!response.data) {
      console.warn("Invalid post login data format", response.data);
      return {
        message: "Error al iniciar sesión",
        errors: response.data,
      }
    }
    return {
      message: "Usuario iniciado sesión correctamente",
      data: response.data,
    }
  } catch (error: any) {
    const backendMessage = error?.response?.data?.message || error.message || "Error desconocido";
    const backendErrors = error?.response?.data?.errors || error?.response?.data || error.message;
    console.warn("Error fetching post login", backendMessage, backendErrors);
    return {
      message: backendMessage,
      errors: backendErrors,
    }
  }
}
