import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="header-wrapper">
    
    <div className="logo">
        <Link to ="/" ><span className="logo-text">MovieSummary</span></Link>
    </div>
    			
</div>
  )
}

export default Navbar