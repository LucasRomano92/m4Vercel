export interface IProduct  {
    "id": number,
    "name": string,
    "description": string,
    "price": number,
    "stock": number,
    "image": string,
    "categoryId": number
  }
  enum eRole {
    USER = "user",
    ADMIN = "admin"
  }

  type Params<T> = Promise<T>
  type SearchParams<T> = Promise<T>

 export interface IOrder {
  id: number;
  status: string;
  date: string;
  products: IProduct[];
}

  export interface IUser {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    role: eRole;
    orders: IOrder[];
  }
 export interface RegisterUserDto {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
  }
  export interface CreateOrderDto {
    userId: number;
    products: number[];
  }
 export interface LoginUserDto {
    email: string;
    password: string;
  }
  export interface ICategory {
  
    id: number;
    name: string;
    products: IProduct[];
    
}