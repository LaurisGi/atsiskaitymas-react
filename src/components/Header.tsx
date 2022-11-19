import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export const Header = () => {

  const useAuth = () => {
    const token = localStorage.getItem('token')
    if (token) {
        return true
    } else {
        return false
    }
};
const user = useAuth()


  const navigation = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token')
    navigation("/login")
  }
  return (
    <header>
      { 
      user && <>
          <Link to="/">Home</Link>
          <Link to="/add">Add</Link>
          {
            window.location.pathname!=='/login' && <button onClick={handleLogout}>Logout</button>
          }
        </>
      }
      { !user && <>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        </>
      }
    </header>
  )
}