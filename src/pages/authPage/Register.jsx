import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router';

function Register() {
    const [hide, setHide] = useState(true);
    const [formData, setFormData] = useState({});
    const fullnameRef = useRef(null);
    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const roleRef = useRef(null);
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const searchParams = new URLSearchParams();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            [fullnameRef.current.name]: fullnameRef.current.value,
            [usernameRef.current.name]: usernameRef.current.value,
            [passwordRef.current.name]: passwordRef.current.value,
            [emailRef.current.name]: emailRef.current.value,
            [passwordRef.current.name]: passwordRef.current.value,
            [roleRef.current.name]: roleRef.current.value,
        })
    }

    searchParams.set("username", formData.username);
    searchParams.set("email", formData.email);
    const params = searchParams.toString()

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const regUser = users.find((user => user.email == emailRef.current.value));
            if (!regUser) {
                users.push(formData);
                localStorage.setItem("users", JSON.stringify(users))
                console.log("user data: ", formData)
                alert("user Registered successfully");
                navigate(`/login?${params}`)
            } else {
                alert('User Already Registered!')
            }
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
                                ref={fullnameRef}
                                onChange={handleChange}
                                className='border border-black outline-0 leading-10 w-64 px-3'
                            />
                        </span>
                        <span>
                            <input
                                type="text"
                                name='username'
                                maxLength={30}
                                ref={usernameRef}
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
                                ref={passwordRef}
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
                                ref={emailRef}
                                onChange={handleChange}
                                className='border border-black outline-0 leading-10 w-64 px-3'
                            />
                        </span>
                        <span className='flex justify-between border border-black outline-0 leading-10 w-64 px-3'>
                            <label htmlFor="role" className='text-gray-500'> Role: </label>
                            <select name="role" id="role" ref={roleRef} required>
                                <option disabled hidden></option>
                                <option value="vendor">Vendor</option>
                                <option value="customer">Customer</option>
                            </select>
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