'use client'
import Loader from '@/components/ui/loader/loader';
import { useAuthContext } from '@/context/authContext';
import React from 'react'

const UserData = () => {
    const {user} = useAuthContext();

    if (user === null) {
        return <Loader minHeight='35vh' />;  
    }
    if (!user) {
        return <div className="text-center text-gray-500">no user data disponible</div>;
    }
  return (
     <div className="p-8 mx-auto my-12 bg-black border border-gray-700 shadow-lg rounded-2xl">
      <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-white">Perfil de Usuario</h2>
      
      <p className="text-white"><span className="font-semibold text-gray-300">Nombre:</span> {user.name}</p>
      <p className="text-white"><span className="font-semibold text-gray-300">Email:</span> {user.email}</p>
      <p className="text-white"><span className="font-semibold text-gray-300">Dirección:</span> {user.address}</p>
      <p className="text-white"><span className="font-semibold text-gray-300">Teléfono:</span> {user.phone}</p>
      <p className="text-white"><span className="font-semibold text-gray-300">Rol:</span> {user.role}</p>
      </div>
    
  
    );
  }


export default UserData;