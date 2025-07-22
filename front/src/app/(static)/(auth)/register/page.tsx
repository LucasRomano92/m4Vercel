import React from "react";
import RegisterForm from "./components/register-form";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div>
      <h2 className="my-3 text-2xl font-bold text-center text-neutral-400">
        Crear Cuenta
      </h2>
      <RegisterForm />
      <p className="mt-3 text-sm text-center text-neutral-500">
        ¿Ya tienes cuenta? {" "}
        <Link href="/login" className="text-primary-500 hover:underline">
          Inicia sesión
        </Link>
      </p>
    </div>
  );
}
