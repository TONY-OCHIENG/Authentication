import React from 'react'

function Login() {
  return (
    <div className='bg-gray-100 px-3 w-full h-[100vh] flex justify-center items-center'>
        <div className='w-full md:w-[40%] shadow-md p-4 rounded-md bg-white '>
            <form action="" className='w-full'>
                <label htmlFor="email">Email</label>
                <input type="email" className='w-full p-2 rounded-md border mb-3' id='email' name='email'/>
                <label htmlFor="password">Password</label>
                <input type="password" className='w-full p-2 rounded-md border mb-3' id='password' name='password'/>
                <button className='w-full py-3 font-lg font-bold cursor-pointer bg-black text-white
                rounded-md'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login