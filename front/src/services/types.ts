export interface LoginServiceResponse {
    message: string;
    data?: LoginResponse;
    errors?: unknown;
}

// Define the IUser interface or import it if defined elsewhere
export interface IUser {
    id: number;
    name: string;
    email: string;
    // Add other user properties as needed
}

export interface LoginResponse {
    login: boolean;
    user: IUser;
    token: string;
}

// Define the Product interface or import it if defined elsewhere
export interface Product {
    id: number;
    name: string;
    // Add other product properties as needed
}

export interface Category {
    
    id: number;
    name: string;
    products: Product[];
}