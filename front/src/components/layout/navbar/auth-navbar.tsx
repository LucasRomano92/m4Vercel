"use client";
import Button from "@/components/ui/button";
import { useAuthContext } from "@/context/authContext";
import { routes } from "@/routes";
import Link from "next/link";
import React from "react";
import { IoCartOutline, IoLogOutOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { usePathname } from "next/navigation";
import Loader from "@/components/ui/loader/loader";
import { useCartContext } from "@/context/cartContext";

export const AuthNavbar = () => {
  const { isAuth, resetUserData } = useAuthContext();
  // Replace with actual authentication logic
  // Dummy user object for demonstration; replace with actual user data from context or props
  const pathname = usePathname();
  const { total, resetCart } = useCartContext();

  const user = {
    id: 1,
    name: "Lucas",
    email: "lucas@example.com",
    address: "123 Main St, Springfield",
    phone: "123-456-7890",
    role: "user",
  };
  const logout = () => {
    resetUserData();
    resetCart();
    //redireccion a la home no con el router de next sino forzando a que se re buildee toda la app de react de nuevo
    if (pathname === routes.home) {
      location.href = routes.login;
      return;
    }
    location.assign(routes.home);
  };
  if (isAuth === null) {
    return <Loader minHeight="35vh" />;
  }
  if (!isAuth) {
    return (
      <div>
        <Link href={routes.login}>
          <Button
            label="Iniciar Sesion"
            className="text-white bg-primary-500 hover:bg-primary-600"
          ></Button>
        </Link>
        <Link href={routes.register}>
          <Button label="Registrarse" variant="primary"></Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-4">
      <div>
        <Link href={routes.cart} className="relative">
          <IoCartOutline className="w-6 h-6 text-primary-700" />
          {total > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary-900 text-white text-xs rounded-full px-2 py-0.5">
              {total}
            </span>
          )}
        </Link>
      </div>
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <Link href={routes.profile} className="flex items-center space-x-2">
          <LuUserRound className="w-6 h-6 text-primary-700" />
          <span className="font-medium cursor-pointer">{user.name}</span>
        </Link>
      </div>
      <div onClick={logout} className="cursor-pointer">
        <IoLogOutOutline className="w-6 h-6 text-primary-700" />
      </div>
    </div>
  );
};
