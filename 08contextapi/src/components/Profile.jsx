import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext)

    if(!user) return <h3>Not logged in</h3>

  return (
    <div><h2>Profile: {user.username}</h2></div>
  )
}

export default Profile