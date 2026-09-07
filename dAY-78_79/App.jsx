import { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [username, setUsername] = useState('')

  const [Num, setNum] = useState(0)

  useEffect(function () {

    const getData = async () => {
      const response = await axios.get('https://randomuser.me/api/')

      setUsername(
        response.data.results[0].name.first +
        " " +
        response.data.results[0].name.last
      )
    }

    getData()

  }, [Num])  //Dependencies

  return (
    <div>
      <div>
        {username}
        <h1>{Num}</h1>
        <button onClick={() =>{
          setNum(Num + 1)
        }}>Click Here</button>
      </div>
    </div>
  )
}

export default App