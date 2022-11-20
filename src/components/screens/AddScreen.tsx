import React from 'react'
import { FormContainer } from '../FormContainer'
import { SyntheticEvent, useState } from 'react'
import { BASE_URL } from '../utils/constants'
import  styled from 'styled-components'

const Button = styled.button`
    width: 200px;
    background: green;
    `




const AddScreen = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const token = localStorage.getItem('token')

    await fetch(`${BASE_URL}/content/skills` , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token},
      body: JSON.stringify({
        title,
        description
      }),
    })
  }

  return (
      <FormContainer>
          <h1>Add skills to your profile</h1>
          <form onSubmit={handleSubmit}>
            <div className='input'>
              <label>Add to your skills</label>
              <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Skill"/>
            </div>
            <div className='input'>
              <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description"/>
            </div>
              <Button>Add</Button>
          </form>
      </FormContainer>
  )
}

export default AddScreen