import React, { SyntheticEvent, useState,} from 'react'
import { BASE_URL } from '../utils/constants';
import { FormContainer } from '../FormContainer';



const HomeScreen = () => {

  const [title, setTitle] = useState([])
  const [description, setDescription] = useState([])


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
            
            // setTitle(data.map(function(d: any, idx: any ){
            //   return (
            //     console.log(`${idx} ${d.title}`)
            //   )
            // }))

            // setTitle(data.title)
            // setDescription(data.description)
            data.forEach((element: any) => {
              const value = element.title;
              console.log(value);
              setTitle(value)
            })
            data.forEach((element: any) => {
              let value = element.description;
              setDescription(value)
            })

  }


  return title ? (
    <FormContainer>
      <h1>Please click a button to see all your skills added</h1>
      <div>
      <h2>{title}</h2>
      <h3>{description}</h3>
      </div>
    <button onClick={handleSubmit}>show skills</button>
    </FormContainer>):( 
    <FormContainer>
      <h1>Please click a button to see all your skills added</h1>
      <h2>Your list is empty</h2>
    <button onClick={handleSubmit}>show skills</button>
    </FormContainer> )
}


//   return list ? (
//       <h1>list: {list}</h1>
//   ) : (
//     <h1>Your list is empty! Make sure add your skills on "Add" page</h1>
//   )
// }

export default HomeScreen


  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(`${BASE_URL}/content/skills`, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: 'Bearer' + token,
  //       })
  //           const data = await response.json()
  //           setList(data.title)
  //     })()
  //   })

