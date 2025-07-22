'use server'

import axios from "axios";

export const axiosApiBackend = axios.create({
    baseURL: process.env.API_URL,
});