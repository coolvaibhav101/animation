import React from 'react'
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
      
    <header className="App-header">
    <ul>
      <li>
        <Link className="link" to="/">Home</Link>
      </li>
      <li>
        <Link className="link" to="/about">About</Link>
      </li>
      <li>
        <Link className="link" to="/contact">Contact</Link>
      </li>
    </ul>
</header>
  )
}

export default Navbar