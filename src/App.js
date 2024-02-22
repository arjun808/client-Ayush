import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Signup from './Signup'
import Signin from './Signin'
import Home from './Home'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App