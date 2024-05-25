import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import SideNavBar from './SideNavBar'

function Navigation() {

  const [showNavBar, setShowNavBar]=useState(false)


  return (
    <div className='NavigationBar'>
    <div className="nav-bar-content">
      <span>PATO restaurant</span>

      <ul>
        <li className="nav-links"><Link to='/'>HOME</Link></li>
        <li className="nav-links"><Link to='/menu'>MENU</Link></li>
        <li className="nav-links"><Link to='/reservation'>RESERVATION</Link></li>
        <li className="nav-links"><Link to="/gallery">GALLERY</Link></li>
        <li className="nav-links"><Link to='/about'>ABOUT</Link></li>
        {/* <li className="nav-links"><a href="#">BLOG</a></li> */}
        <li className="nav-links"><Link to='/contact'>CONTACT</Link></li>
      </ul>

      <FontAwesomeIcon className="barIcon" icon={faBars} onClick={()=>{setShowNavBar(!showNavBar)}}/>

    </div>

    {showNavBar && <SideNavBar toogle={showNavBar} state={setShowNavBar}/>}
    </div>
  )
}

export default Navigation