import React from 'react'

const Upper = ({ name, role, image }) => {

  return (
    <div className='flex flex-col items-center'>

      <img
        className='w-24 h-24 rounded-full object-cover'
        src={image}
        alt={name}
      />

      <h1 className='text-2xl font-bold mt-3'>
        {name}
      </h1>

      <h2 className='text-blue-500 font-semibold'>
        {role}
      </h2>

    </div>
  )
}

export default Upper