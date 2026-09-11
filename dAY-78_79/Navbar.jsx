import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
        <div className = 'flex justify-between px-8 py-4 bg-pink-900 mb-10'>
      <h2>Navbar</h2>
      <input className='border-2' type="text" />
      <div className = 'flex gap-8'>
        <Link to = '/' className = 'text-white'>Home</Link>
        <Link to = '/courses' className = 'text-white'>Courses</Link>
        <Link to = '/product' className = 'text-white'>Product</Link>
        <Link to = '/about' className = 'text-white'>About</Link>
      </div>
    </div>
  )
}

export default Navbar
