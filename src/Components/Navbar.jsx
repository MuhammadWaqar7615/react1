//dropdown issue
import React, { useContext, useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useNavigate, useSearchParams } from 'react-router'
import { AuthContext } from '../context/AuthContext';
import { ArrowBigDown, ArrowDown, Camera, ChevronDown } from 'lucide-react';

function Navbar({ children }) {
    const { user, userSSId } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()
    const [dropdown, setDropdown] = useState(false)
    const [status, setStatus] = useState("login")
    const [userStatus, setUserStatus] = useState("Guest")
    const [showDashboard, setShowDashboard] = useState("dashboard");

    useEffect(() => {
        if (location.pathname == "/dashboard") {
            setShowDashboard("home");
            console.log("location: ", location.pathname)
        } else {
            setShowDashboard("dashboard")
        }

        if (user?.id == userSSId) {
            setUserStatus(user?.username)
            setStatus("logout")
        } else {
            setUserStatus("Guest");
            setStatus("login")
        }
    }, [])


    return (
        <>
            <div className='bg-white/20 w-full h-10 flex justify-between items-center px-10 border-b border-black/30'>
                <div>Navbar</div>

                <div className={`relative ${dropdown ? "top-[26px]" : "top-0"}`}>
                    <button
                        className='flex items-center gap-1 bg-amber-100 rounded-lg px-2 py-1 cursor-pointer border border-amber-300'
                        onClick={() => setDropdown(!dropdown)}
                    >
                        {userStatus}<ChevronDown size={18} />
                    </button>
                    {dropdown && (
                        <div className='relative flex flex-col items-center justify-between w-full top-0'>
                            <span className='cursor-pointer w-full px-1 bg-amber-100 border border-amber-300 border-b-transparent'>
                                <Link to={`${status == "logout" ? "/login" : "/logout"}`} >
                                    {status}
                                </Link>
                            </span>
                            <span className='cursor-pointer w-full px-1 bg-amber-100 border border-amber-300'>
                                <Link to={`${showDashboard == "dashboard" ? "/dashboard" : "/"}`}>
                                    {showDashboard}
                                </Link>
                            </span>
                        </div>
                    )}
                </div>


            </div>
            <Outlet />
        </>
    )
}

export default Navbar