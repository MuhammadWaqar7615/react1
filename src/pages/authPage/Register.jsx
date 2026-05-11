import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router';

function Register() {
    const [hide, setHide] = useState(true);
    const [formData, setFormData] = useState({});
    const searchParams = new URLSearchParams();
    const navigate = useNavigate();
    // const [searchParams, setSearchParams] = useSearchParams();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    searchParams.set("username", formData.username);
    searchParams.set("email", formData.email);
    const params = searchParams.toString()

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            let data = JSON.parse(localStorage.getItem("users")) || [];
            data.push(formData);
            localStorage.setItem("users", JSON.stringify(data))
            alert("user Registered successfully");
            navigate(`/login?${params}`)
        } catch (error) {
            alert("user Registered failed");
            console.error(error)
        }

    }
    return (
        <>
            <h1 className='text-2xl text-center my-8 flex justify-center'>Registration Page</h1>
            <div className='w-[300px] mx-auto'>
                <form onSubmit={handleSubmit} action="" className='flex flex-col items-center'>

                    <div className='flex flex-col gap-1 item-center justify-center'>
                        <span>
                            <input
                                type="text"
                                name='full name'
                                maxLength={30}
                                placeholder='Full name'
                                onChange={handleChange}
                                className='border border-black outline-0 leading-10 w-64 px-3'
                            />
                        </span>
                        <span>
                            <input
                                type="text"
                                name='username'
                                maxLength={30}
                                placeholder='Username'
                                onChange={handleChange}
                                className='border border-black outline-0 leading-10 w-64 px-3'
                            />
                        </span>
                        <span>
                            <input
                                type={hide ? "password" : "text"}
                                name='password'
                                maxLength={30}
                                placeholder='Password'
                                onChange={handleChange}
                                className='border border-black outline-0 leading-10 w-64 px-3'
                            />
                            <span onClick={() => setHide(!hide)} className='relative right-12'>
                                {hide ? "show" : "hide"}
                            </span>
                        </span>
                        <span>
                            <input
                                type="email"
                                name='email'
                                maxLength={30}
                                placeholder='Email'
                                onChange={handleChange}
                                className='border border-black outline-0 leading-10 w-64 px-3'
                            />
                        </span>
                        <span>
                            <button type="submit" className='bg-blue-800 text-white w-20 cursor-pointer leading-10'>Submit</button>
                        </span>
                        <span>
                            <Link to="/login" className='text-blue-700'>Already have an account, Signin</Link>
                        </span>
                    </div>
                </form >
            </div>
        </>
    )
}

export default Register