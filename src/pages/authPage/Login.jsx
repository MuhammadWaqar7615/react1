import React, { useState } from 'react'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router';

function Login() {
  const location=useLocation()
  const params = new URLSearchParams(location.search)
  const [formData, setFormData] = useState({})

  // console.log("params", params.get('email'));
  const paramEmail = params.get('email');
  const paramUsername = params.get('username');
  const [show, setShow] = useState(false);

  const getData = JSON.parse(localStorage.getItem("users"));
  console.log(getData)

  const handleChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.name] : e.target.value,
    })
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    getData.forEach(element => {
      if(element.username == paramUsername) {
        console.log("user verified");

        console.log("element email", element.email)
        console.log("formData email", formData.email)

        console.log("element password", element.password)
        console.log("formData pasword", formData.password)

        if((element.email == formData.email) && (element.password == formData.password)) {
          console.log("email and password of that user verified");
        } else {
          console.log("fuck off")
        }
      }
    });
  }
  return (
    <div>
      <h1 className='text-2xl text-center my-8'>Login Page</h1>
      <form onSubmit={handleSubmit} className='flex justify-center'>
        <div className='flex flex-col gap-1 item-center justify-center'>
          <span>
            <input
              type="email"
              defaultValue={paramEmail}
              name='email'
              onChange={handleChange}
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
              onChange={handleChange}
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