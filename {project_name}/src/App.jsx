import React from 'react'
import {useState} from 'react'
import Navbar from './components/Navbar'
import UserCard from './components/UserCard'
import Counter from './components/Countrer'
import Button from './components/Button'

const App = () => {
  const [count,setCount] = useState(0);

  function handleButton() {
    setCount(count+1);
  }
  return (
    <>
      {/* <div className="div">App</div> */}

      {/* <Navbar />
      <div className="div">
        <UserCard name="Pic1" />
        <UserCard name="pic2" />
        <UserCard name="Pic3" />
      </div> */}

      {/* <Counter /> */}
       {/* <UserCard name="Pic1" />
       <UserCard>
        <h1>Learning Props</h1>
        <p>I am learnig how to pass the props to child components.</p>
        <p>This is a paragraph inside the UserCard component.</p>
       </UserCard> */}

        <Button handleClick={handleButton} text="Click Me" />
       <h1>You have clicked the button {count} times.</h1>
      

    </>
  )
}

export default App