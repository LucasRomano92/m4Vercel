import React from 'react'
import UserData from './components/user-data';
import OrdersList from './components/orders-list';


const PageProfile = () => {
  
 
    
  

  return (
    <div className="p-8 mx-auto my-12 bg-black border border-gray-700 shadow-lg rounded-2xl">
      <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-white">Perfil de Usuario</h2>
      <UserData />
      <h3 className="pb-2 mb-6 text-2xl font-bold text-white border-b border-primary-700">Órdenes</h3>
      <OrdersList />
    </div>
  )
  
}

export default PageProfile;