import React from 'react'
import Navbar from './components/Navbar.jsx'
import Section from './components/Sections.jsx'
import Footer from './components/Footer.jsx'
import UserContext from './context/UserContext.jsx'

const App = () => {
  return (
    <div className='h-90 bg-zinc-700 '>
      <Navbar brand="Appollo">
        <h1 className='text-red-600'>Hello Mitrooo!</h1>
        <h1 className='text-blue-600'>Hello Mitarjiii!</h1>
      </Navbar>
      <Section/>
      <Footer />
    </div>
  )
}

export default App
