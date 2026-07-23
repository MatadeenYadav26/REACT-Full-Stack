import React from 'react'
import Card from './components/Card'
import button from './components/Button'
import Button from './components/Button'

const App = () => {

  // const user = 'Aman';
  // const age = 21;
  const users = ['Aman','Deepak','Akshay','Ajay']
  return (
    <div className='p-3 h-screen text-red-500 bg-black'>
      {/* {arr.map(function(elem){
        return <h1>{elem} is King</h1>
      }) } <br/>
      {10+20}<br/>
      {user}
      <Card/>
      {age} */}
      {/* {Card('Aman')}
      {Card('Harsh')} */}
      {/* {Card(10,20)}
      {Card(30,20)} */}


      {/* <Button text='Click Here'/>
      <br />
      <Button text='Download'/> */}


      {users.map(function(elem){
        // return <h1>{elem}</h1>;
        return <Card users={elem}/>;
      })}
    </div>
  )
}

export default App
