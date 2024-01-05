import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username, setusername] =useState('')
    const [password, setpassword] =useState('')

    const {setuser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setuser({username,password})
    }

  return (
    <div>
        <h1>Login</h1>
        <input
        type='text'
        value={username}
        onChange={(e)=>setusername(e.target.value)}
        placeholder='Username'
        />{" "}
        <input
        type='password'
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
        placeholder='Password'
        />
        <button
        onClick={handleSubmit}
        >Submit</button>
    </div>
  )
}

export default Login