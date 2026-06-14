import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
  const [auth,setAuth] = useState(false)
  const [message,setMessage] = useState('')
  const [name,setname] = useState('')
  const navigate = useNavigate()
  axios.defaults.withCredentials = true
  useEffect(() => {
        axios.get('http://localhost:3000/auth')
        .then((result) => {
            if (result.data.status) {
                setAuth(true)
                setname(result.data.name)
            } else {
               setAuth(false)
               navigate('/login')
            }
        })
        .catch((error) => console.log(error))
  },[])
  const handleLogout = () => {
    axios.get(`http://localhost:3000/auth/logout`)
    .then((response) => {
      location.reload(true)
    })
    .catch((error) => {console.log(error)})
  }
  return (
    <div>
        {
          auth ? <div className='mt-4'>
            <h1>You are authorised {name}</h1>
            <button className='px-6 py-2 text-lg font-bold bg-red-600 text-white
            rounded-md' onClick={handleLogout}>Logout</button>
          </div> : <div>
            <h3>{}</h3>
            <h1>Login now</h1>
            <Link to={'/login'}>login</Link>
          </div>
        }
    </div>
  )
}

export default Home