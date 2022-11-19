import React, { SyntheticEvent, useState } from 'react'
import { BASE_URL } from '../utils/constants';



const HomeScreen = () => {


  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (e: SyntheticEvent) => {

    const token = localStorage.getItem('token')

    const response = await fetch(`${BASE_URL}/content/skills` , {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      })
            const data = await response.json()
            console.log(JSON.stringify(data))
            

            data.forEach((element: any) => {
              const value = element.title;
              console.log(value);
              setTitle(value)
            })
            data.forEach((element: any) => {
              let value = element.description;
              console.log(value);
              setDescription(value)
            })

  }


  return (
    <>
      <h1>Please click a button to see all your skills added</h1>
      <h2>{title}</h2>
      <h3>{description}</h3>
    <button onClick={handleSubmit}>show list</button>
    </>
  )
}

export default HomeScreen

// const token =  localStorage.getItem('token');
// const [list, setList] = useState('');

// const handleList = async (e: SyntheticEvent) => {
//   const response = await fetch(`${BASE_URL}/content/skills` , {
//       headers: {
//         Authorization: 'Bearer' + token
//     }})
//     const data = await response.json();
//     console.log(data);
//       if (data.err) {
//           console.log(data.err);
//       } else {
//         console.log(data)
//       }
//     }

// function App() {


//   const token =  localStorage.getItem('token')
//   const [list, setList] = useState('')

  // useEffect(() => {
  //   ;(async () => {
  //     const response = await fetch(`${BASE_URL}/content/skills`, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: 'Bearer' + token,
  //       })
  //           const data = await response.json()
  //           setList(data.title)
  //     })()
  //   })

// const HomeScreen = ({list}: Props) => {
//   return list ? (
//       <h1>list: {list}</h1>
//   ) : (
//     <h1>Your list is empty! Make sure add your skills on "Add" page</h1>
//   )
// }

// const HomeScreen = ({list}: Props) => {
//   return list ? (
//       <h1>list: {list}</h1>
//   ) : (
//     <h1>Your list is empty! Make sure add your skills on "Add" page</h1>
//   )
// }