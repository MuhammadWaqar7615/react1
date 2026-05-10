import React, { useState } from 'react'
import { Link } from 'react-router';

function Register() {
    const [hide, setHide] = useState(true);
    return (
        <>
            <h1 className='text-2xl text-center my-8'>Registration Page</h1>
            <form action="" className='flex flex-col items-center'>
                <div className='flex flex-col gap-1 item-center justify-center'>
                    <span>
                        <input
                            type="text"
                            placeholder='Full name'
                            className='border border-black outline-0 leading-10 w-64 px-3'
                        />
                    </span>
                    <span>
                        <input
                            type="text"
                            placeholder='Username'
                            className='border border-black outline-0 leading-10 w-64 px-3'
                        />
                    </span>
                    <span>
                        <input
                            type="password"
                            placeholder='Password'
                            className='border border-black outline-0 leading-10 w-64 px-3'
                        />
                    </span>
                    <span>
                        <input
                            type="email"
                            placeholder='Email'
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
        </>
    )
}

export default Register