import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

function Dashboard({ children }) {
  const name = useContext(AuthContext);
  console.log("name: ", name);
  return(
    <div>
      <h1>Dashboard</h1>
      {console.log("name: ", name)}
      <p>Hello, my name is: {name}</p>
    </div>
  )
}

export default Dashboard