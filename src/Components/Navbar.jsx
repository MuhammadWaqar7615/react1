import React, { useContext, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router'
import { AuthContext } from '../context/AuthContext';

function Navbar({ children }) {
    const {user} = useContext(AuthContext)
    console.log("userData in navbar: ", user);
    const navigate = useNavigate();

    const handleChange = (e) => {
        navigate(e.target.value);
    }
    return (
        <>
            <div className='bg-white/20 w-full h-10 flex justify-between items-center px-10 border-b border-black/30'>
                <div>Navbar</div>

                <select onChange={handleChange}>
                    <option value="" className='disable hidden'>User</option>
                    <option value="/login">Login</option>
                    <option value="/dashboard">Dashboard</option>
                </select>

            </div>
            <Outlet />
        </>
    )
}

export default Navbar