import React, { Children } from 'react'


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
