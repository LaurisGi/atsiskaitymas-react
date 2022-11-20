import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router-dom';
// import  SignupScreen from './components/screens/SignupScreen';
// import HomeScreen from './components/screens/HomeScreen';
// import LoginScreen from './components/screens/LoginScreen';
// import AddScreen from './components/screens/AddScreen';
import ProtectedRoutes from './components/ProtectedRoutes';
import GlobalStyles from './components/styles/Global';

const SignupScreen = React.lazy(() => import('./components/screens/SignupScreen'))
const LoginScreen = React.lazy(() => import('./components/screens/LoginScreen'))
const HomeScreen = React.lazy(() => import('./components/screens/HomeScreen'));
const AddScreen = React.lazy(() => import('./components/screens/AddScreen'))

function App() {


  return (
    <div className='App'>
      <GlobalStyles />
      <Header />
      <body>
        <Routes>
          <Route path='/signup' element={<React.Suspense fallback={<div>Loading...</div>}><SignupScreen /></React.Suspense> }/>
          <Route path='/login' element={<React.Suspense fallback={<div>Loading...</div>}><LoginScreen /></React.Suspense> }/>
          <Route element={<ProtectedRoutes />}>
            <Route path='/' element={<React.Suspense fallback={<div>Loading...</div>}><HomeScreen /></React.Suspense> }/>
            <Route path='/add' element={<React.Suspense fallback={<div>Loading...</div>}><AddScreen /></React.Suspense> }/>
          </Route>
        </Routes>
      </body>
      <Footer />
    </div>
  );
}

export default App;


// useEffect(() => {
//   (
//     async () => {
//     const response = await fetch(`${BASE_URL}/content/skills`, {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: 'Bearer' + token
//       })
//           const data = await response.json()
//           setTitle(data.title)
//     })()
//   })

