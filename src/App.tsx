import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router-dom'
import  SignupScreen from './components/screens/SignupScreen';
import HomeScreen from './components/screens/HomeScreen';
import LoginScreen from './components/screens/LoginScreen';
import AddScreen from './components/screens/AddScreen';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<SignupScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/home' element={<HomeScreen />} />
          <Route path='/add' element={<AddScreen />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
