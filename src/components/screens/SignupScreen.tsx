import React from 'react'
import { FormContainer } from '../FormContainer'
import { SyntheticEvent, useState } from 'react'
import { BASE_URL } from '../utils/constants'


const SignupScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [registrationError, setRegistrationError] = useState('')
    const [success, SetSuccess] = useState('')

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
          SetSuccess('Registration succesfull please login')
          setRegistrationError('')
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
            <div className='input'>
              <h3 style={{color:"green"}}>{success}</h3>
              <div className='input-fields'>
                <label>Email address</label>
                <input value={email} required onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter your email"/>
              </div>
              <div className='input-fields'>
                <label>Password</label>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password"/>
              </div>
            </div>
            <button>Sign Up</button>
        </form>
    </FormContainer>
  )
}

export default SignupScreen

