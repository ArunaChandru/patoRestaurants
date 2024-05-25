import React from 'react'
import { useState } from 'react'
import video from './video/RestaurentVideo.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import './displayVideo.css'

function DisplayVideo({state,setState}) {
  const [display, setDisplay]=useState('block')

  const toggleVideo=()=>{
    setDisplay('none')
    setState(false)
  }
  return (
    <div className='displayVideo' style={{display}}>
        <FontAwesomeIcon className='videoClose' icon={faXmark} onClick={toggleVideo}/>
        <video controls>
            <source src={video}/>
        </video>
    </div>
  )
}

export default DisplayVideo