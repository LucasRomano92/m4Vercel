import React from "react";
import LoginForm from "./components/login-form";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <h2 className="my-2 mb-1 text-2xl font-bold text-center text-neutral-400">
        Iniciar sesión
      </h2>
      <LoginForm />
      <p className="mt-3 text-sm text-center text-neutral-200">
        ¿No tienes cuenta?{" "}
        <Link href="/register" className="text-primary-500 hover:underline">
          Registrate
        </Link>
      </p>
    </div>
  );
};

export default page;
