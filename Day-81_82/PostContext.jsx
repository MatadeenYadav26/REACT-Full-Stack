import React, { createContext } from 'react'

    export const PostDataContext = createContext()

const PostContext = ({children}) => { // children ko propsk jagah drct ese v receive kar skte h , this is a destructuring part.
  
    const data = [
        {
            id:1
        }
    ]
  
    return (
    <div>
      <PostDataContext.Provider value={data}>
        {children}
      </PostDataContext.Provider>
    </div>
  )
}

export default PostContext
