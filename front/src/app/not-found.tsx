import Container from "@/components/layout/container";
import React from "react";
import  Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer";

const NotFound = () => {
  
  return (
    <>
    <Navbar/>
    <Container>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="mb-4 text-6xl font-bold text-gray-800">404</h1>
        <h2 className="mb-2 text-2xl font-semibold text-gray-700">Página no encontrada</h2>
        <p className="mb-6 text-gray-600">La página que buscas no existe o fue movida.</p>
        
        Volver al inicio
      
    </div>
    </Container>
    <Footer/>
        </>
  );
};

export default NotFound;