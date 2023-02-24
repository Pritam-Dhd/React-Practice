import React from 'react'
import "./Header.css";

const Header = ({name,income}) => {
  return (
    <>
      <h1>My First React App created by {name}:$ {income}</h1>
      <hr/>
    </>
  )
}

export default Header