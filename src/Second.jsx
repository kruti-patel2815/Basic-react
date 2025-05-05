import React, { useState } from 'react'

const Second = () => {

    const [text,setText]=useState('Welcome to CDMI')
    

    const data = ()=>{
        setText('Good Morning')
     
    }
    const data1 =()=>{
        setText('Hello')
    }
    const data2 =()=>{
        setText('Refresh')
    }
    const data3 =()=>{
        setText('Creative')
    }
  
  return (
    <div>
      <h1>{text}</h1>
 

      <button onClick={data}>Good Morning</button>
      <button onClick={data1}>Hello</button>
      <button onClick={data2}>Refresh</button>
      <button onClick={data3}>Creative</button>

      
    </div>
  )
}

export default Second
