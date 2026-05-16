import React, { useContext, useState } from 'react'
import { AuthContext } from './AuthContext.jsx'
import { Outlet } from 'react-router-dom';

export default function ProtectedRoute ({ children }) {
    const { users, userSSId } = useContext(AuthContext);
    let isAuthenticated = false
    console.log("user ss id: ", userSSId);

    const userLSId = users?.find((user) => user.id == userSSId).id;
    console.log("user ls id: ", userLSId)

    if(userLSId === userSSId) {
        isAuthenticated = true;
        
    } else {
        alert("Not Authorized");
        window.location.href = '/login';
    }


  return (
    <Outlet />
  )
}