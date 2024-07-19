import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Rough = () => {
    const [da,upd]=useState([])
    const [loading,updl]=useState(false)
    const fetch=async()=>{
        updl(true)
       const data= await axios.get('https://jsonplaceholder.typicode.com/todos/7')
       upd(data)
       console.log(data)
       updl(false)
    }
    useEffect(()=>{
        fetch()
    },[])
  return (
    <div>
      {
        loading?'loading':<>
        {da.data.completed?"True":'false'}</>
      }
    </div>
  )
}

export default Rough
