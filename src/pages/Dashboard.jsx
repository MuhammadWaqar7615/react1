import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

function Dashboard({ children }) {
  const userData = useContext(AuthContext);
  console.log("User: ", userData)
  return(
    <div>
      <span>Welcome back</span> 
      <p>This is Dashboard</p>
    </div>

    // <div>
    //   {userData.map((user) => (
    //     <p>users: {user.username}</p>
    //   ))}
    // </div>
  )
}

export default Dashboard