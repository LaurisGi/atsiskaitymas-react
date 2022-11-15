import React, { SyntheticEvent, useState } from 'react'
import { FormContainer } from '../FormContainer'


const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

        const handleSubmit = (e: SyntheticEvent) => {
            e.preventDefault();

            console.log('submitted')
        }

  return (
    <FormContainer>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label>Email address</label>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter your email"/>
            <label>Password</label>
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password"/>
            <button>Log In</button>
        </form>
    </FormContainer>
  )
}

export default LoginScreen