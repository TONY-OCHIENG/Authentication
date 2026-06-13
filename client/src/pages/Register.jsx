import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [registerDetails, setRegisterDetails] = useState({
    name:'',
    email:'',
    password:''
  })
  const handleSubmit = (event) => {
    event.preventDefault()
  }
  const handleValues = (event) => {
    const { name, value} = event.target
    setRegisterDetails((prev) => ({
      ...prev,
      [name]:value
    }))
  }
  console.log(registerDetails)
  return (
    <div className='bg-gray-100 px-3 w-full h-[100vh] flex justify-center items-center'>
        <div className='w-full md:w-[40%] shadow-md p-4 rounded-md bg-white '>
            <form action="" onSubmit={handleSubmit} className='w-full'>
                <label htmlFor="name">Name</label>
                <input type="text" onChange={handleValues} className='w-full p-2 rounded-md border mb-3' id='name' name='name'/>
                <label htmlFor="email">Email</label>
                <input type="email" onChange={handleValues} className='w-full p-2 rounded-md border mb-3' id='email' name='email'/>
                <label htmlFor="password">Password</label>
                <input type="password" onChange={handleValues} className='w-full p-2 rounded-md border mb-3' id='password' name='password'/>
                <button className='w-full py-3 font-lg font-bold cursor-pointer bg-black text-white
                rounded-md'>Register</button>
                <p className='text-gray-600 mt-3 text-xs'>Already have an Account? <Link to={'/login'} className='font-extrabold'>Click to Login</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Register