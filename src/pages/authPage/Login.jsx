import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router';

function Login() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const [show, setShow] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const users = JSON.parse(localStorage.getItem("users"));
  const paramUsername = params.get('username');
  const paramEmail = params.get('email');

  useEffect(() => {
      emailRef.current.value = paramEmail;
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("emailRef: ", emailRef.current.value);
    console.log("passwordRef: ", passwordRef.current.value);

    const currentEmail = emailRef.current.value;
    const currentPassword = passwordRef.current.value;

    try {
      const user = users.find((user) => user.email == currentEmail);
    } catch (error) {
      console.error("No user Exists");
      return
    }

    if(user) {
      if(user.password == currentPassword) {
        window.location.href='/dashboard';
      } else {
        console.error("Invalid Password");
      }
    } else {
      console.error("Invalid Email")
    }
  } 

  return (
    <div>
      <h1 className='text-2xl text-center my-8'>Login Page</h1>
      <form onSubmit={handleSubmit} className='flex justify-center'>
        <div className='flex flex-col gap-1 item-center justify-center'>
          <span>
            <input
              type="email"
              name='email'
              ref={emailRef}
              maxLength={30}
              placeholder='Email'
              className='border border-black outline-0 leading-10 w-64 px-3'
            />
          </span>
          <span>
            <input
              type={show ? "text" : "password"}
              name='password'
              maxLength={30}
              ref={passwordRef}
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