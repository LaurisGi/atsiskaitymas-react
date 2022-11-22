import React, { SyntheticEvent, useState } from 'react'
import { FormContainer } from '../FormContainer'
import { BASE_URL } from '../utils/constants'
import { useNavigate } from 'react-router-dom'


const LoginScreen = () => {
  
  

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');



        const handleSubmit = async (e: SyntheticEvent) => {
            e.preventDefault();

            const response = await fetch(`${BASE_URL}/auth/login` , {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  email,
                  password
                }),
              })
              const data = await response.json();
              console.log(data);
                if (data.err) {
                    setLoginError(data.err);
                } else {
                    localStorage.setItem('token', data.token)
                    navigate('/')
                    
                }}

  return (
    <FormContainer>
        <h1>Login</h1>
        {loginError && <h3>{loginError}</h3>}
        <form onSubmit={handleSubmit}>
          <div className='input'>
            <div className='input-fields'>
              <label>Email address</label>
              <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter your email"/>
            </div>
            <div className='input-fields'>
              <label>Password</label>
              <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password"/>
            </div>
              <button>Log In</button>
          </div>
        </form>
    </FormContainer>
  )
}

export default LoginScreen