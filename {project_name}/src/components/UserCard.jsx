import React from 'react'
import './UserCard.css'
import reactPic from '../assets/react.svg'

const UserCard = (props) => {
  return (
    <div className="user-card">
        {/* <h1>{props.name}</h1>
        <img src={reactPic} alt="React Logo" />
        <p>This is a simple user card component.</p> */}
        {props.children}
    </div>
  )
}

export default UserCard