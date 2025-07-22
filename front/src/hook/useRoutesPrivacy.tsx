"use client";
import { useAuthContext } from "@/context/authContext";
import { routes } from "@/routes";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

const useRoutesPrivacy = () => {
  const [loading, setLoading] = useState(true);
  const { isAuth } = useAuthContext();
  const pathname = usePathname();
  const router = useRouter();
  const publicRoutes = [routes.home, routes.landing, routes.login, routes.register];
  const privateRoutes = [routes.profile, routes.cart];

  useEffect(() => {
    if (isAuth === null) {
      return;
    }
    const routePrivacy = publicRoutes.includes(pathname)
      ? "public"
      : privateRoutes.includes(pathname)
      ? "private"
      : null;
    if (!routePrivacy) {
      return;
    }
    if 
      
      (routePrivacy === "private" && !isAuth)
     {
      router.push(routes.login);
    }
    setLoading(false);
  }, [pathname, isAuth, publicRoutes, privateRoutes, router]);

  return { loading };
};

export default useRoutesPrivacy;
