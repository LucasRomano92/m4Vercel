import { categories } from "@/helpers/categories";
import { routes } from "@/routes";
import { ICategory } from "@/types";

const generateLinksCategories = (cates: ICategory[]) => {
  return cates.map((category) => ({
    href: `${routes.products}?category=${category.id}`,
    label: category.name,
  }));
};
export const NavLinks = [
  // { href: routes.profile,
  //   label: "Perfil" },

  // { href: routes.cart,
  //   label: "Carrito" },

  // { href: routes.login,
  //     label: "Login"},

  // { href: routes.products,
  //    label: "Productos"
  //    },
  //   { href: routes.landing,
  //     label: "Landing"
  //    },
  ...generateLinksCategories(categories).slice(0, 5),
];
