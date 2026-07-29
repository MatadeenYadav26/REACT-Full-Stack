import React,{useState} from 'react';
// import Men from './components/Men.jsx';
// import Women from './components/Women.jsx';
import Washroom from './components/Washroom';

const App = () => {
  const [gender, setgender] = useState('Male')

  function changeGender(){
    if(gender == 'Male'){
      setgender('Female')
    }
    else{
      setgender('Male')
    }
  }

  return (
    <div className='parent'>
      <h1>{gender}</h1>
      <button onClick={changeGender}>Change Gender</button>
      
      {/* {gender == 'Male'? <Men/> : <Women/>} */}
      <Washroom user= {gender}/>
    </div>
  )
}

export default App

























// import React from 'react'

// const App = () => {
//   return (

//     <div className='parent'>
//       <div>
//         <input type="radio" name='gender' id='male' />
//       <label htmlFor="male"> Male</label>
//       </div>
    
//       <div>
//         <input type="radio" name='gender' id='female' />
//       <label htmlFor="female"> Female</label>
//       </div>

//     </div>
//   )
// }

// export default App





























// // how to do change a value in a array:=>

// import React,{useState} from 'react'

// const App = () => {

//   // let marks = [10,20,30,40,50]

//   const [marks, setMarks] = useState([10,20,30,40,50])

//   function graceStudent(){
//     console.log("Dediya Grace");
    

//     const newMarks = marks.map(function(elem){
//       if(elem>33){
//         return elem
//       }
//       else{
//         return elem+5
//       }
//     })
//     setMarks(newMarks);
    
//   }

//   return (
//     <div>
//     {marks.map(function(elem,idx){

//       return <h1 key={idx}>student {idx+1} = {elem} ({elem>33?'Pass':'Fail'})</h1>
//     })}    

//     <button onClick={graceStudent}>Give Them Grace!</button>
//     </div>
//   )
// }

// export default App


































// import React,{useState} from 'react'

// const App = () => {
//   // const [num, setnum] = useState(0)
//   const arr = ['aman','adi','amit','ajay']

//   const [num, setnum] = useState(0)
//   return (
//     <div>
//       <h1>{arr[num]}</h1>
//       <button onClick={()=>{
//         if(num<arr.length-1){
//           setnum(num+1)
//         }
//       }}>Change User</button>
//     </div>
//   )
// }

// {/* <div>
//     //   <div className='box'>
//     //   {num}
//     //   </div>
//     //   <button onClick={()=>{
//     //     const rdm = Math.floor(Math.random()*100)
//     //     setnum(rdm)
//     //   }}
//     //   >Click Here</button>
//     // </div> */}

// export default App






































// import React,{useState} from 'react'

// const App = () => {

//   const arr = ['aman','harsh','sarthak','Ankit']

//   const [num, setnum] = useState(0)

//   return ( 
//      <div>
//         <h1>{arr[num]}</h1>
//         <button onClick={()=>{

//           if(num<arr.length-1){
//             setnum(num+1)
//           }

//         }}>Change User</button>

//      </div>
//   )
// }   


  
//   // const [num, setnum] = useState(0)
//   // const [num, setnum] = useState(10)

//   // const btnClicked=()=>{
//   //   console.log("Btn clicked");
//   // }

//   // const [king, setking] = useState("Aman")
//   // const changeking=()=>{
//   //   setking('Matadeen')
//   // }

//   // const [Queen, setQueen] = useState("Ankita")
//   // const changeQueen=()=>{
//   //   setQueen('Anshika')
//   // }

//   // const [user, setuser] = useState('Aman')

//   // const btnClicked = () => {
//   //   setuser('Matadeen') // this is a asynchronous function
//   // }

//   // <h1>{num}</h1>
//   //       <button onClick={()=>{
//   //         setnum(num+1)
//   //       }}>Increase</button>
//   //       <button onClick={()=>{
//   //         setnum(num-1)
//   //       }}>Decrease</button>

//   // <div className="box">
//   //         {num}
//   //       </div>
//   //       <button onClick={()=>{
//   //         const rdm = Math.floor(Math.random()*100)
//   //         setnum(rdm)
//   //       }}>Click Here</button>






    
//     //   <h1>{user}</h1>
//     //   <button onClick={btnClicked}>Change-user</button>
    




//        {/* <h1>{king}X{Queen}</h1> */}
//       {/* <button onClick={changeking}>Change-King</button> */}
//       {/* <button onClick={changeQueen}>Change-Queen</button>  */}
       
      
      
    
// export default App
