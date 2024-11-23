import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import SignUp from './Pages/SignUp'
import Signin from './Pages/Signin'
import Profile from './Pages/Profile'
import Header from './components/Header'

const App = () => {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/signup" element={<SignUp/>} />
    <Route path="/login" element={<Signin/>} />
    <Route path="/profile" element={<Profile/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App