"use client";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import React from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import * as Yup from "yup";
import { postLogin } from "@/services/auth";
import { toast } from "react-toastify";
import { useAuthContext } from "@/context/authContext";
import { routes } from "@/routes";
import { useRouter } from "next/navigation";

const loginSchema = Yup.object({
  email: Yup.string()
    .email("El correo electronico debe ser valido")
    .required("El correo electronico es requerido"),
  password: Yup.string()
    .min(6, "La contrasena debe tener al menos 6 caracteres")
    .required("La contrasena es requerida"),
});

const LoginForm = () => {
  const { saveUserData } = useAuthContext();
  const router = useRouter();

  const [formData, setFormData] = React.useState({
    email: "prueba2@prueba",
    password: "prueba123",
  });

  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [loading, setLoading] = React.useState(false);

  // VALIDACIONES
  const handleValidation = async () => {
    try {
      await loginSchema.validate(formData, { abortEarly: false });
      return true; // Validación exitosa
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const newErrors: Record<string, string> = {};
        error.inner.forEach((curr) => {
          if (curr?.path) {
            newErrors[curr.path] = curr.message;
          }
        });
        setErrors(newErrors);
      }
      return false; // Validación fallida
    }
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = await handleValidation();
    if (!isValid) return;

    try {
      setLoading(true);
      const res = await postLogin(formData);

      if (res?.errors) {
        return toast.error("Ocurrió un error al iniciar sesión");
      }
      toast.success("Iniciaste Sesión Correctamente");

      saveUserData(res.data);

      setTimeout(() => {
        router.push(routes.home); // Redirigir al usuario a la página principal o donde desees
      }, 2000);
    } catch (error: unknown) {
      toast.error("Ocurrió un error al iniciar sesión");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <div className="max-w-md p-6 mx-auto mt-8 bg-black rounded-lg shadow-lg">
      <form className="flex flex-col" onSubmit={onSubmit}>
        <Input
          label="Correo electronico"
          id="email"
          type="text"
          placeholder="Ingresa tu correo electronico"
          className="mb-4"
          value={formData.email}
          onChange={handleOnChange}
          error={errors?.email}
        />

        <Input
          label="Contraseña"
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Ingresa tu Contraseña"
          className="mb-4"
          value={formData.password}
          onChange={handleOnChange}
          error={errors?.password}
        >
          <div onClick={handleShowPassword} className="text-gray-500">
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </div>
        </Input>

        <Button
          label="Iniciar Sesion"
          type="submit"
          className="w-full"
          disabled={loading}
        >
          Iniciar Sesion
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
