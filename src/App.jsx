import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Auth from './pages/Auth'
import Home from './pages/Home'
export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>} />
      </Routes>
      </div>
  )
}
