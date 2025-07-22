"use client";
import Button from "@/components/ui/button";
import Modal from "@/components/layout/modal";
import React, { useState } from "react";
import { useAuthContext } from "@/context/authContext";
import { useCartContext } from "@/context/cartContext";
import { postOrder } from "@/services/orders";
import { toast } from "react-toastify";
import { routes } from "@/routes";
import { useRouter } from "next/navigation";
import { CreateOrderDto } from "@/types";

const CreateOrder = () => {
  const router = useRouter();
  const { token, user } = useAuthContext();
  const { cart, resetCart } = useCartContext();

  // logicas del modal y el boton
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  const handleOrder = async () => {
    try {
      if (!user || !user.id) {
        toast.error("Usuario no autenticado. No se puede crear la orden.");
        return;
      }

      const payLoad: CreateOrderDto = {
        products: cart?.map((product) => product.id!) || [],
        userId: user.id,
      };

      const response = await postOrder(token || "", payLoad);
      if (!response || response?.error) {
        return toast.error("No se pudo crear la orden");
      }

      toast.success(`Orden #${response.id} creada con éxito`);
      resetCart();

      setTimeout(() => {
        router.push(routes.profile);
      }, 2000);
    } catch (error) {
      console.warn("Error creating order:", error);
      toast.error("No se pudo crear la orden");
    }
  };

  return (
    <>
      <Button label="Crear Orden" onClick={onOpen} variant="secondary" />
      <Modal isOpen={isOpen} onClose={onClose}>
        <div>
          <div>
            <h2 className="text-primary-700">Crear Orden</h2>
            <p className="text-primary-700">
              ¿Estás seguro de que quieres crear esta orden?
            </p>
          </div>
          <div>
            <Button
              label="Crear Orden"
              variant="primary"
              onClick={handleOrder}
            />
            <Button label="Cancelar" variant="outline" onClick={onClose} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CreateOrder;
