import React, { useContext, useState } from 'react'
import { AuthContext } from './AuthContext.jsx'
import { Outlet } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const { user, userSSId } = useContext(AuthContext);
  let isAuthenticated = false
  if (user?.id === userSSId || user?.role === "superadmin") {
    isAuthenticated = true;
  } else {
    alert("Not Authorized");
    window.location.href = '/login';
  }
  return (
    <Outlet />
  )
}