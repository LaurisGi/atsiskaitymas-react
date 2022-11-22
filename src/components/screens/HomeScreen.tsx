import React, { useEffect, useState,} from 'react'
import { BASE_URL } from '../utils/constants';
import { FormContainer } from '../FormContainer';



const HomeScreen = () => {

  interface Data {
    id: number,
    title: string,
    description: string,
    user_id: number
  }
  const [res, setRes] = useState([])



  useEffect(() =>  {
    (async function() {
        try { const token = localStorage.getItem('token');
          const response = await fetch(`${BASE_URL}/content/skills` , {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            },
          });
            const data = await response.json();
            setRes(data.map((item: Data) =>  
              ((<div key={item.id}>
                  <h4>{item.title}</h4>
                  <h5>{item.description}</h5>
                </div>
                ))))
        } catch (e) {
                console.log(e);
              }     
    })();
    },[]);


  return (
    <FormContainer>
      <h1>Your skills:</h1>
        <div>{res}</div>
        {
            res.length === 0  && <h2>Your list is empty </h2>
          }
    </FormContainer>
  )
}


export default HomeScreen


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// const HomeScreen = () => {

//   const [title, setTitle] = useState([])
//   const [description, setDescription] = useState([])


//   const handleSubmit = async (e: SyntheticEvent) => {

//     const token = localStorage.getItem('token')

//     const response = await fetch(`${BASE_URL}/content/skills` , {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + token
//       },
//       })
        

//             const data = await response.json()
            
//             // setTitle(data.map(function(d: any, idx: any ){
//             //   return (
//             //     console.log(`${idx} ${d.title}`)
//             //   )
//             // }))

//             // setTitle(data.title)
//             // setDescription(data.description)
//             data.forEach((element: any) => {
//               const value = element.title;
//               console.log(value);
//               setTitle(value)
//             })
//             data.forEach((element: any) => {
//               let value = element.description;
//               setDescription(value)
//             })

//   }


//   return title ? (
//     <FormContainer>
//       <h1>Please click a button to see all your skills added</h1>
//       <div>
//       <h2>{title}</h2>
//       <h3>{description}</h3>
//       </div>
//     <button onClick={handleSubmit}>show skills</button>
//     </FormContainer>):( 
//     <FormContainer>
//       <h1>Please click a button to see all your skills added</h1>
//       <h2>Your list is empty</h2>
//     <button onClick={handleSubmit}>show skills</button>
//     </FormContainer> )
// }


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// KODEL INFINATE LOOPAS?

// const HomeScreen = () => {

//   const [res, setRes] = useState('')



//   useEffect(() =>  {
//     (async () => {
//     const token = localStorage.getItem('token');

//     const response = await fetch(`${BASE_URL}/content/skills` , {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + token
//       },
//       })
//             const data = await response.json()
//             setRes(data.map((item: any) =>  
//             ( console.log(item.id),(<div key={item.id}><h2>{item.title}</h2><h3>{item.description}</h3></div>))))
            
//     })()
//     })


//   return (
//     <FormContainer>
//     <div>{res}</div>
//     </FormContainer>

//   )
// }

