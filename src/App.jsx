import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/global/Home'
import Login from './pages/authPage/Login'
import Dashboard from './pages/Dashboard'
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App