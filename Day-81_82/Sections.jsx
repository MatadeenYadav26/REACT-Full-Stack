import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'
import { PostDataContext } from '../context/PostContext'

const Sections = () => {

    const data = useContext(PostDataContext)
    console.log(data);

  return (
    <div>
      <h1 className='text-xl text-white'>This is Section.</h1>
    </div>
  )
}

export default Sections
