import React from 'react'
import Card from './components/Card.jsx'
import Button from './components/Button.jsx'
// import card from './components/Card.jsx'

// const App = () => { 
//   return (
//     <div>
//       APP    
//       {/* < Card /> */}
//       {/* {< Card />} */}
//       {Card("Aman")}
//       {Card("Deepak")}
//     </div>
//   )
// }

// export default App




// import React from 'react'

// const App = () => {
//   return (
//     <div className='p-3 h-screen bg-black '>
//       {/* {Card('Aman',21)}
//       {Card('Ajay',69)}
//       {Card('Atul',23)} */}
//       <Card  user='Aman' age='19'/>
//       <Card  user='Matadeen' age='21'/>
//       </div>
//   )
// }

// export default App


const App = () => {
  const users=['Aman','Aditya','Ajay','Aryan']
  return (
    <div className='p-3 h-screen bg-black '>
      {users.map(function(elem){
        return < Card users={elem}/>
      })}
    </div>
  )
}

export default App

