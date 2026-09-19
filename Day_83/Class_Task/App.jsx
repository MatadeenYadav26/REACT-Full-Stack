import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Route,Routes } from 'react-router-dom'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Home from './pages/Home'


const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/'   element={<Home />}/>
        <Route path='/products'   element={<Products />}/>
        <Route path='/products/:productId'   element={<ProductDetails />}/>
      </Routes>
    </div>
  )
}

export default App



