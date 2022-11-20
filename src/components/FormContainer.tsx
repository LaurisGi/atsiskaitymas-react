import React, { Children } from 'react'
import styled from 'styled-components'


interface Props {
    children: React.ReactNode
}


export const FormContainer = ({children}: Props) => {
  return (
    <div className='wrapper'>
        {children}
    </div>
  )
}
