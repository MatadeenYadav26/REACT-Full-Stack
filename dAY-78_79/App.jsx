import React, { useState, useEffect } from 'react'
import axios from 'axios'
import User from './components/User'

const App = () => {

  const [allData, setAllData] = useState([])

  const getData = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )

    console.log(response.data)

    setAllData(response.data)
  }

  useEffect(function () {
    getData()
  }, [])

  return (
    <div>

      <div className="card-container">

        {
          allData.map(function (elem, idx) {
            return <User key={idx} elem={elem} />
          })
        }

      </div>

    </div>
  )
}

export default App