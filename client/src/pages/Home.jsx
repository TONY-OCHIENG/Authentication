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
  useEffect(() => {
        axios.get('/')
        .then((result) => {
            if (result.data.status) {
                setAuth(true)
                setname(result.data.name)
            } else {
               setAuth(false)
            }
        })
        .catch((error) => console.log(error))
  })
  return (
    <div>
        {
          auth ? <div className='mt-4'>
            <h1>You are authorised {name}</h1>
            <button>Logout</button>
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