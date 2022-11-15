import React from 'react'
import { FormContainer } from '../FormContainer'
import { SyntheticEvent ,useState } from 'react'

const SignupScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();

        //await fetch(`{}/`)


        console.log('submitted')
    }

  return (
    <FormContainer>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <label>Email address</label>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter your email"/>
            <label>Password</label>
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password"/>
            <button>Sign Up</button>
        </form>
    </FormContainer>
  )
}

export default SignupScreen