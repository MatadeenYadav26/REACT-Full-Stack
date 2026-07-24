import React from 'react'
import nav from './components/Navbar'
import Navbar from './components/Navbar'
import Women from './components/Women'
import Men from './components/Men'

const App = () => {

  function btnClicked(){
      console.log("Button is clicked");
    }

  // const user1 ={
  //   name:'Aman',
  //   age:21,
  //   gender:'male'
  // }
  // const user2 ={
  //   name:'Anshu',
  //   age:20,
  //   gender:'female'
  // }

  return (
    // <div className='text-white   bg-emerald-700' >
    //   <Navbar title="amazon.in"  color="red" links={['Home','wishlist','account','contact']}/ >
    //   <Navbar title="flipkart.in" color="blue" links={['Home','cart','orders','contact']}/ >
    //   <Navbar title="meesho.in" color="green" links={['Home','orders','account','contact']}/ >
    // </div>
    // <div>
    // {user1.gender=='male'?<Men/>:<Women/>}
    // </div>

    

    

    <div>
      <button onClick={btnClicked}
       className='active:scale-95 bg-emerald-600 text-white rounded m-2.5 px-5 py-5'>Download
      </button>
    </div>
    
  )
}

export default App
