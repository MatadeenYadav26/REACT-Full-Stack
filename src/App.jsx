import React,{useState} from 'react'

const App = () => {

  const arr = ['aman','harsh','sarthak','Ankit']

  const [num, setnum] = useState(0)

  return ( 
     <div>
        <h1>{arr[num]}</h1>
        <button onClick={()=>{

          if(num<arr.length-1){
            setnum(num+1)
          }

        }}>Change User</button>

     </div>
  )
}   


  
  // const [num, setnum] = useState(0)
  // const [num, setnum] = useState(10)

  // const btnClicked=()=>{
  //   console.log("Btn clicked");
  // }

  // const [king, setking] = useState("Aman")
  // const changeking=()=>{
  //   setking('Matadeen')
  // }

  // const [Queen, setQueen] = useState("Ankita")
  // const changeQueen=()=>{
  //   setQueen('Anshika')
  // }

  // const [user, setuser] = useState('Aman')

  // const btnClicked = () => {
  //   setuser('Matadeen') // this is a asynchronous function
  // }

  // <h1>{num}</h1>
  //       <button onClick={()=>{
  //         setnum(num+1)
  //       }}>Increase</button>
  //       <button onClick={()=>{
  //         setnum(num-1)
  //       }}>Decrease</button>

  // <div className="box">
  //         {num}
  //       </div>
  //       <button onClick={()=>{
  //         const rdm = Math.floor(Math.random()*100)
  //         setnum(rdm)
  //       }}>Click Here</button>






    
    //   <h1>{user}</h1>
    //   <button onClick={btnClicked}>Change-user</button>
    




       {/* <h1>{king}X{Queen}</h1> */}
      {/* <button onClick={changeking}>Change-King</button> */}
      {/* <button onClick={changeQueen}>Change-Queen</button>  */}
       
      
      
    
export default App
