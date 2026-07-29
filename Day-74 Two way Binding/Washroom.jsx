import React from 'react'

const Washroom = (props) => {

    const color = props.user == 'Male' ?'rgb(0, 0, 255)':'palevioletred'


  return (
    <div style={{background:color}} className='wash'>
        {props.user} Washroom
    </div>
  )
}

export default Washroom
