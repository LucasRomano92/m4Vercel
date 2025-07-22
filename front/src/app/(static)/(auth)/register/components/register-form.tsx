"use client";
import React from "react";
import { Formik } from "formik";
import Input from "@/components/ui/input";
import * as Yup from "yup";
import Button from "@/components/ui/button";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { postRegister } from "@/services/auth";
// import { RegisterUserDto } from "@/types";
import { toast } from "react-toastify";
import { routes } from "@/routes";
import  { useRouter } from "next/navigation";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede tener más de 50 caracteres")
    .required("El nombre es requerido"),
  lastName: Yup.string()
    .min(2, "El apellido debe tener al menos 2 caracteres")
    .max(50, "El apellido no puede tener más de 50 caracteres")
    .required("El apellido es requerido"),
  email: Yup.string()
    .email("El correo electrónico debe ser válido")
    .required("El correo electrónico es requerido"),
  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .max(50, "La contraseña no puede tener más de 50 caracteres")
    .required("La contraseña es requerida"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Las contraseñas deben coincidir")
    .required("La confirmación de contraseña es requerida"),
  address: Yup.string()
    .min(5, "La dirección debe tener al menos 5 caracteres")
    .max(100, "La dirección no puede tener más de 100 caracteres")
    .required("La dirección es requerida"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "El teléfono debe tener 10 dígitos")
    .required("El teléfono es requerido"),
});
// interface RegisterUserForm extends RegisterUserDto {
//   confirmPassword: string;
// }

const RegisterForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
    const router = useRouter();
  

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  // const handleOnSubmit = (values: RegisterUserForm, { setSubmitting }: any) => {
  //   const { confirmPassword, ...data } = values;
  //   // You can handle submit logic here if needed
  // };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        name: "",
        lastName: "",
        confirmPassword: "",
        address: "",
        phone: "",
      }}
      validationSchema={RegisterSchema}
      onSubmit={async (values, { setSubmitting }) => {
        const { ...data } = values;
        try {
          const res = await postRegister(data);
          if (res?.errors) {
            return toast.error("Ocurrió un error al registrar el usuario");
          }
          toast.success("Usuario registrado correctamente");
          // Aquí puedes redirigir al usuario o realizar otra acción
           setTimeout(() => {
                  router.push(routes.login); // Redirigir al usuario a la página de inicio de sesión
                }, 2000);
        } catch (error) {
          toast.error("Ocurrió un error al registrar el usuario", error);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <div className="max-w-md p-6 mx-auto mt-8 bg-black rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <Input
            label="Nombre"
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            error={errors.name && touched.name ? errors.name : ""}
          />
          <Input
            label="Apellido"
            id="lastName"
            type="text"
            name="lastName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
            error={errors.lastName && touched.lastName ? errors.lastName : ""}
          />
          <Input
            label="Email"
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={errors.email && touched.email ? errors.email : ""}
          />

          <Input
            label="Contrasena"
            id="password"
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={errors.password && touched.password ? errors.password : ""}
          >
            <div onClick={handleShowPassword} className="text-gray-500">
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </div>
          </Input>
          <Input
            label="Confirmar Contrasena"
            id="confirmPassword"
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
            error={
              errors.confirmPassword && touched.confirmPassword
                ? errors.confirmPassword
                : ""
            }
          >
            <div onClick={handleShowPassword} className="text-gray-500">
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </div>
          </Input>
          <Input
            label="Dirección"
            id="address"
            type="text"
            name="address"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address}
            error={errors.address && touched.address ? errors.address : ""}
          />
          <Input
            label="Telefono"
            id="phone"
            type="text"
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
            error={errors.phone && touched.phone ? errors.phone : ""}
          />
          <div className="flex justify-center">
            <Button
              label="Registrarse"
              className="justify-center mt-8"
              type="submit"
              disabled={isSubmitting}
            ></Button>
          </div>
        </form>
        </div>
      )}
    </Formik>
  );
};

export default RegisterForm;
