import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductDetails from './pages/productDetails'
import Shop from './pages/Shop'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
function App() {
  return (
   <>
   <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/shop' element={<Shop/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/product/:productId/:category' element={<ProductDetails/>}/>
  <Route path='/aboutus' element={<AboutUs/>}/>
  <Route path='/contactus' element={<ContactUs/>}/>
   </Routes>
   </>
  )
}

export default App
