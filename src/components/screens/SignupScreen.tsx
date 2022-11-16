import React from 'react'
import { FormContainer } from '../FormContainer'
import { SyntheticEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from './utils/constants'


const SignupScreen = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

      await fetch(`${BASE_URL}/auth/register` , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'},
        body: JSON.stringify({
          email,
          password
        }),
      })
        navigate('/login')
    }

  return (
    <FormContainer>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <label>Email address</label>
            <input value={email} required onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter your email"/>
            <label>Password</label>
            <input value={password} required onChange={e => setPassword(e.target.value)} type="password" placeholder="Password"/>
            <button>Sign Up</button>
        </form>
    </FormContainer>
  )
}

export default SignupScreen