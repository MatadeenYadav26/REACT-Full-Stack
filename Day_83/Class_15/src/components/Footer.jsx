import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Footer = () => {
    // const data = useContext(ThemeDataContext)
    const [theme,setTheme] = useContext(ThemeDataContext)
  return (
    <div className='footer'>
      <h1>This is Footer</h1>
      {/* {data} */}
      {theme}
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

export default Footer
