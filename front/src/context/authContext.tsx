"use client";

import { LoginResponse } from "@/services/types";
import { IUser } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";
import { JSX } from "react/jsx-runtime";

type AuthContextType = {
  isAuth: boolean;
  user: IUser | null;
  token: string | null;
  saveUserData: (data: any) => void;
  resetUserData: () => void;
};
const AUTH_KEY = "authData";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);

  //actions
  const saveUserData = (data: LoginResponse) => {
    setUser(data.user);
    setToken(data.token);
    setIsAuth(true);

    // guardar los datos del contexto en el local storage
    localStorage.setItem(AUTH_KEY, JSON.stringify(data));
  };
  const resetUserData = () => {
    setUser(null);
    setToken(null);
    setIsAuth(false);
    // eliminar los datos del contexto del local storage
    localStorage.removeItem(AUTH_KEY);
  };
  // restaurar los datos del contexto desde el local storage
  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem(AUTH_KEY) || "{}"); // vamos a tener el objeto js guardado en nuestro localStorahge

    if (storage === undefined || !Object.keys(storage).length) {
      setIsAuth(false);
      setToken("");
      return;
    }
    const storageType = storage as any;

    setUser(storage?.user);
    setToken(storageType.token);
    setIsAuth(storage?.login);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuth, user, token, saveUserData, resetUserData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
