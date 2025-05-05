import React, { useState } from 'react'

const Third = () => {

    const [num,setNum]=useState(0)

    const handleNumber = ()=>{
        setNum(num + 1)
    }
    const Number = (item)=>{
        setNum(num - item)
    }
    const Number1 = (item)=>{
        setNum(num + item)
    }
    const Numberminus = (item)=>{
        setNum(num - item)
    }
  return (
    <div>
      <h1>{num}</h1>

      <button onClick={handleNumber}>+1</button>
      <button onClick={()=>Number(5)}>-5</button>
      <button onClick={()=>Number1(10)}>+10</button>
      <button onClick={()=>Numberminus(2)}>-2</button>
    </div>
  )
}

export default Third
