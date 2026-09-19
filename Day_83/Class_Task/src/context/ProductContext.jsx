import axios from 'axios'
import React, { createContext, useEffect , useState } from 'react'
import { getAllProductData } from '../api/ProductApi'


export const ProductDataContext = createContext()

const ProductContext = (props) => {

    const [productData, setProductData] = useState([])  
    
    const setData = async()=>{
        setProductData(await getAllProductData())

    }

//   const getData = async()=>{
//     const response = await axios.get("https://fakestoreapi.com/products")
//     setProductData(response.data)
//   }

//   const getFirstData = async(id)=>{
//     const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
//     console.log(response.data)
//   }

  useEffect(function(){
    setData()
  },[])



  return (
    <div>
      <ProductDataContext.Provider value={productData}>
        {props.children}
      </ProductDataContext.Provider>
    </div>
  )
}

export default ProductContext
