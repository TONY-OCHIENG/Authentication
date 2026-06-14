import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const [loginDetails,setLoginDetails] = useState({
        email:'',
        password:''
    })
    const navigate = useNavigate()
    axios.defaults.withCredentials = true
    const handleLogin = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3000/auth/login',loginDetails)
        .then((result) => {
            if (result.data.status) {
                navigate("/")
            }
        })
        .catch((error) => console.log(error))
    }
    const handleValues = (event) => {
        const { name, value } = event.target 
        setLoginDetails((prev) => ({
          ...prev,
          [name]:value  
        }))
    }
    useEffect(() => {
        axios.get('http://localhost:3000/auth')
        .then((result) => {
            if (result.data.status) {
                navigate('/')
            } else {
               navigate('/login')
            }
        })
        .catch((error) => console.log(error))
    },[])
  return (
    <div className='bg-gray-100 px-3 w-full h-[100vh] flex justify-center items-center'>
        <div className='w-full md:w-[40%] shadow-md p-4 rounded-md bg-white '>
            <form action="" onSubmit={handleLogin} className='w-full'>
                <label htmlFor="email">Email</label>
                <input  onChange={handleValues} type="email" className='w-full p-2 rounded-md border mb-3' id='email' name='email'/>
                <label htmlFor="password">Password</label>
                <input  onChange={handleValues} type="password" className='w-full p-2 rounded-md border mb-3' id='password' name='password'/>
                <button  className='w-full py-3 font-lg font-bold cursor-pointer bg-black text-white
                rounded-md'>Login</button>
                <p className='text-gray-600 mt-3 text-xs'>Don't have an Account? <Link to={'/register'} className='font-extrabold'>Click to Register</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Login