import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Auth from './pages/Login'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import AddNewProduct from './pages/AddNewProduct'
import { Toaster } from 'react-hot-toast'
import Login from './pages/Login'
import Signup from './pages/Signup'
export default function App() {
  return (
    <div>
      <Toaster position='top-right' reverseOrder={false}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/product-details' element={<ProductDetails/>} />
        <Route path='/add-new-product' element={<AddNewProduct/>} />
      </Routes>
      </div>
  )
}
