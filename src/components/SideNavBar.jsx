import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Gallery from './Gallery'

function SideNavBar({toogle, state}) {

  const toogleSideBar=()=>{
    state(!toogle);
  }
  return (
    <div className={toogle ? "sideBar active" : "sideBar"} >
      <FontAwesomeIcon className="closeIcon" onClick={toogleSideBar}  icon={faXmark} />
      <ul>
        <li className="side-nav-links"><Link to='/' onClick={toogleSideBar}>HOME</Link></li>
        <li className="side-nav-links"><Link to='/menu' onClick={toogleSideBar}>MENU</Link></li>
        <li className="side-nav-links"><Link to="/gallery" onClick={toogleSideBar}>GALLERY</Link></li>
        <li className="side-nav-links"><Link to='/about' onClick={toogleSideBar}>ABOUT</Link></li>
        {/* <li className="side-nav-links"><a href="#" onClick={toogleSideBar}>BLOG</a></li> */}
        <li className="side-nav-links"><Link to='/contact'onClick={toogleSideBar} >CONTACT</Link></li>
        <li><Link to='/reservation' onClick={toogleSideBar} id='reservtionLinkBtn'>RESERVATION</Link></li>
      </ul>
      <h3>G A L L E R Y </h3>
      <Gallery />
    </div>
  )
}

export default SideNavBar