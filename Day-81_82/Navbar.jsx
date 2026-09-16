import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'

const Navbar = (props) => {

    const data = useContext(UserDataContext)
    console.log(data)


    console.log(props)
  return (
    <div className='h-10 w-full bg-emerald-600 '>
      <h1>This is {props.brand}</h1>
      <h1>This is {data}</h1>
      {props.children[1]}
      {props.children[0]}
    </div>
  )
}

export default Navbar
