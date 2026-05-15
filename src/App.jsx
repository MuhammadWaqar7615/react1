import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/global/Home'
import Login from './pages/authPage/Login'
import Dashboard from './pages/Dashboard'
import Navbar from './Components/Navbar';
import Register from './pages/authPage/Register';
import { ThemeProvider } from './context/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App