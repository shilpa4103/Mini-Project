import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../img/logo.png'
const Navbar = () => {

  const [sticky,setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50?setSticky(true):setSticky(false);
    })
  },[])

  return (
    <nav className={`container-homepage ${sticky?'dark-nav':''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>Practice</li>
            <li>About us</li>
            <li>Contact us</li>
        </ul>
    </nav>
  )
}

export default Navbar
