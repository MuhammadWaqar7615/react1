import React, { useState } from 'react'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router';

function Login() {
  const location=useLocation()
  const params = new URLSearchParams(location.search)
  console.log("params", params.get('username'));
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1 className='text-2xl text-center my-8'>Login Page</h1>
      <form action="" className='flex justify-center'>
        <div className='flex flex-col gap-1 item-center justify-center'>
          <span>
            <input
              type="text"
              placeholder='Username or Email'
              className='border border-black outline-0 leading-10 w-64 px-3'
            />
          </span>
          <span>
            <input
              type={show ? "text" : "password"}
              placeholder='Password'
              className='border border-black outline-0 leading-10 w-64 px-3'
            />
            <span onClick={() => setShow(!show)} className='inline-block cursor-pointer relative -translate-x-12'>
              {show ? "show" : "hide"}
            </span>
          </span>
          <span>
            <button type="submit" className='bg-blue-800 text-white w-20 cursor-pointer leading-10'>Submit</button>
          </span>
          <span>
            <Link to="/register" className='text-blue-700'>Didn't have an account, Signup</Link>
          </span>
        </div>
      </form>
    </div>
  )
}

export default Login