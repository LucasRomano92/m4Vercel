export interface LoginServiceResponse {
    message: string;
    data?: LoginResponse;
    errors?: any;
}

export interface LoginResponse {
    login: boolean;
    user: IUser;
    token: string;
}

export interface Category {
    
    id: number;
    name: string;
    products: Product[];
}