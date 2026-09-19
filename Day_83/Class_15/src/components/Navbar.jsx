import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {

    // const data =  useContext(ThemeDataContext)
    const [theme,setTheme] = useContext(ThemeDataContext)


  return (
    <div className='nav'>
      <h1>NAVBARRRR </h1>
      <h2>{theme}</h2>
      <button onClick={()=>{
        if (theme=='Ye Data Hai'){
        setTheme('Ye Data Changed Hai')}
        else{
            setTheme('Ye Data Hai')
        }
      }}
      >Change Theme</button>
    </div>
  )
}

export default Navbar
