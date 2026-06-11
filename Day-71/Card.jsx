// import React from 'react'


// const card = (u) => {
//   // const age = 18;
//   // const user = 'Aman';
//   // const arr = [10,20,30]
//   // const arr2 = ['aman','amit','ajay',"atul"]
//   // const arr3 = [10,20,30]
  
//   return (
//     <div>
//       {/* hello from card
//       <h1>age</h1>
//       <h1>{user}{age}</h1>
//       <h1>{arr}</h1>
//       <h1>{arr[0]}</h1>
//       <h1>{arr2.map(function(elem){
//         return <h1>{elem}</h1>
//       })}</h1>
//       <h1>{arr3.filter(function(elem){
//         return elem>11
//       })}</h1> */
     
//      <div>This is card of {u}</div>
//      }
//     </div>
//   )
// }

// export default card



import React from 'react'

const Card = (props) => {
  console.log(props.users);
  return (

    <div className = 'bg-white m-2 border-2 border-red-500 rounded px-5 py-3 w-40 h-40'>
      <h1 className='text-2xl font-semibold'>{props.users}</h1>
      


    </div>
  )
}

export default Card
