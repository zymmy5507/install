import React from 'react'
import { useState } from 'react'
import './Counter.css'

const Countrer = () => {
    const [count,setCount] = useState(0);
  return (
    <div className="counter">
        <h1>Counter Component</h1>
        <p>You have clicked the button {count} times.</p>
        <button onClick={() => {setCount(count+1)}}>Click Me</button>
    </div>
  )
}

export default Countrer