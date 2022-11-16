import React from 'react'
import { Link } from 'react-router-dom'
import SignupScreen from './screens/SignupScreen'

export const Header = () => {
  return (
    <header>
        <Link to="/">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/home">Home</Link>
        <Link to="/add">Add</Link>
    </header>
  )
}