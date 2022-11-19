import React from 'react'
import { FormContainer } from '../FormContainer'
import { SyntheticEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constants'


const SignupScreen = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [registrationError, setRegistrationError] = useState('')

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

      const response = await fetch(`${BASE_URL}/auth/register` , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'},
        body: JSON.stringify({
          email,
          password
        }),
      })
      try { 
        const data = await response.json();
        console.log(data)
        if (data.err) {
          setRegistrationError(data.err);
        } else {
          navigate('/login')
        }
      } catch (error) {
        console.log(error)
      }
  
    }

  return (
    <FormContainer>
        <h1>Sign Up</h1>
        {registrationError && <h3>{registrationError}</h3>}
        <form onSubmit={handleSubmit}>
            <label>Email address</label>
            <input value={email} required onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter your email"/>
            <label>Password</label>
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password"/>
            <button>Sign Up</button>
        </form>
    </FormContainer>
  )
}

export default SignupScreen

