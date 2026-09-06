import React from 'react'
import Upper from './Upper'
import Lower from './Lower'

const Card = ({ user }) => {

  return (
    <div className='bg-white text-black w-80 rounded-xl p-5'>

      <Upper
        name={user.name}
        role={user.role}
        image={user.image}
      />

      <Lower
        description={user.description}
      />

    </div>
  )
}

export default Card