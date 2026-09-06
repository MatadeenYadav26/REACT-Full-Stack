import React from 'react'
import Card from './components/Card'

const App = () => {

  const user1 = {
    name: 'Aman',
    role: 'Frontend Developer',
    image: 'https://i.pravatar.cc/150?img=12',
    description: 'I am learning React and building projects.'
  }

  const user2 = {
    name: 'Rahul',
    role: 'Backend Developer',
    image: 'https://i.pravatar.cc/150?img=5',
    description: 'I am learning Node.js and MongoDB.'
  }

  return (
    <div className='min-h-screen bg-black text-white flex flex-wrap gap-5 justify-center items-center'>

      <Card user={user1} />

      <Card user={user2} />

    </div>
  )
}

export default App