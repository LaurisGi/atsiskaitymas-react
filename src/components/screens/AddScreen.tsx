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
  const [addErr, SetaddErr] = useState('')
  const [addSuccess, SetaddSuccess] = useState('')

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const token = localStorage.getItem('token')

    const response = await fetch(`${BASE_URL}/content/skills` , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token},
      body: JSON.stringify({
        title,
        description
      }),
    })
    const data = await response.json();
    console.log(data);
      if (data.err) {
        SetaddErr(data.err);
      } else {
        SetaddSuccess('Skill was successfully added!');
        setTitle('')
        setDescription('')
      }

  }

  return (
      <FormContainer>
          <h1>Add skills to your profile</h1>
          <form onSubmit={handleSubmit}>
            {addErr &&<h2>{addErr}</h2>}
            <h2 style={{color:"green"}}>{addSuccess}</h2>
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