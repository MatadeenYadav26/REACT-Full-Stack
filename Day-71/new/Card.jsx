import React from 'react'

const Card = (props) => {

  return (
    <div className='bg-white border-2 border-red-500 m-2 rounded h-20 px-5 py-3 w-40'>
      {/* This is Card {a+b}. */}
      {/* This is a card of {u} */}

      <h1 className='text-2xl font-semibold'>
        {props.users}
      </h1>
    </div>
  )
}

export default Card
