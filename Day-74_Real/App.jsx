return (
  <h1>HELLO AMAN 12345</h1>
)

// 2 Way Binding:
import React,{useState} from 'react'

const App = () => {

  const [name, setname] = useState('')
  const [allUsers, setallUsers] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault()  


    // const newAllUsers =[...allUsers] //destructuring
    const oldUsers = [...allUsers]
    console.log(oldUsers);

    oldUsers.push(name)
    setallUsers(oldUsers)


    newAllUsers.push(name)
    // console.log(newAll Users);

    setallUsers([...allUsers,name]);
    
    setTitle('')

  }



  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" 
        placeholder='Enter name'
        value={name}
        required
        onChange={(e)=>{
          setname(e.target.value)
        }}
        />
        <button>Submit</button>
      </form>
      {allUsers.map((elem,idx)=>{
        // return <h1>{elem}</h1>
        return <h4 key={idx}>{elem}</h4>
      })}
    </div>
  )
}

export default App












// 2 Way Binding:

// import React,{useState} from 'react'

// const App = () => {

//   const submitHandler = (e) =>{
//     e.preventDefault()  
//     console.log('Submitted');
//   }


//   const [name, setname] = useState('')


//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         submitHandler(e)
//       }}>
//         <input type="text" 
//         placeholder='Enter name'
//         value={name}
//         required
//         onChange={(e)=>{
//           setname(e.target.value)
//         }}
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App































// //Two Way Binding
// import React,{useState} from 'react'

// const App = () => {
//   const submitHandler = (e)=>{
//     e.preventDefault()
//     console.log("Form Submitted");
//   }

//   const [username, setusername] = useState('')


//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         submitHandler(e)
//       }}>
//         <input 
//         type="text" 
//         placeholder='Enter Your Name'
//         // value='Aman' : hard codes in input
//         value={username}
//         onChange={(e)=>{
//           console.log(e.target.value);
//           setusername(e.target.value);
//         }}
//          />
//          <button>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App

































// Form Handling 
// import React from 'react'

// const App = () => {

//   const submitHandler = (e)=>{
//     e.preventDefault()
//     console.log("Form Submitted");
//   }

//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         submitHandler(e)
//       }}>
//         <input type="text" placeholder='Enter Name' />
//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App


































// useState 
// import React,{useState} from 'react'

// const App = () => {
//   const [num, setnum] = useState(0)
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={()=>{
//         setnum(num+1)
//       }}
//       >Increase</button>
//     </div>
//   )
// }

// export default App
