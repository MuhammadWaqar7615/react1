import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

function Dashboard({ children }) {
  const {user} = useContext(AuthContext);
  // console.log("dashboard User: ", user)
  return(
    <div>
      <span>Welcome back {user?.fullName}</span> 
      <p>This is Dashboard Page</p>
    </div>
  )
}

export default Dashboard