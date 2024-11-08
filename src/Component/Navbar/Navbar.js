import React, { useState, useRef } from 'react'
import './Navbar.css'
// import logo from '../../assets/logo.svg'
// import {Link} from 'react-router-dom'
import menu_icon from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-300px"
  }
  return (
    <>
      <div className="navbar-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <div className='navbar'>
              {/* <img src={logo} alt="" /> */}
              <h1 className='logo-title'>PRE<span className='logo-sub-title'>ETI</span></h1>
              <img src={menu_icon} onClick={openMenu} className='menu-open' alt="" />
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} className='menu-close' alt="" />
                <li onClick={() => setMenu("home")}><a href = "#home">Home</a>{menu === "home"}</li>
                <li onClick={() => setMenu("home")}><a href = "#about">About Me</a>{menu === "about"}</li>
                <li onClick={() => setMenu("home")}><a href = "#interest">Interest</a>{menu === "interest"}</li>
                <li onClick={() => setMenu("home")}><a href = "#mywork">My Work</a>{menu === "mywork"}</li>
                <li onClick={() => setMenu("home")}><a href = "#contact">Contact</a>{menu === "contact"}</li>
            </ul>
            <div className="nav-connect">
              <a href="#contact">Connect with me</a>
              </div>
          </div>
        </div>
      </div>
    </div>
      </div>
  </>
  )
}

export default Navbar
