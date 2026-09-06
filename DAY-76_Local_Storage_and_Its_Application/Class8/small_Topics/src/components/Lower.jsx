import React from 'react'

const Lower = ({ description }) => {

  return (
    <div className='mt-5 text-center'>

      <p className='text-gray-600'>
        {description}
      </p>

      <button className='mt-4 bg-black text-white px-5 py-2 rounded'>
        View Profile
      </button>

    </div>
  )
}

export default Lower