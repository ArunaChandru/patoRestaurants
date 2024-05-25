import React from 'react'
import slide3 from './images/wallpaper3.jpg'
import DisplayVideo from './DisplayVideo'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


function Content() {

  const [video, showVideo]=useState(false)

  const toggleShowVideo=()=>{
    showVideo(!video)
  }

  return (
    <div className="slider">
        <div class="slides">
            <img className='slide' src={slide3} alt='wallpaper'/>
        </div>
        <div className="text">
            <h1 className="homeHeading">Welcome to</h1>
            <h3>P A T O &nbsp;&nbsp;R E S T A U R A N T</h3>
            <Link to='/menu' className='menuBtn'>LOOK MENU</Link>
        </div>

        <div className="italianRestaurant">
          <div className="textBlock">
            <h1 className='italicTitle'>Italian Restaurant</h1>
            <p className='title'>W E L C O M E</p>
            <div className='paragraph'>
            <p>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.</p>
            </div>
            <Link to='/about' className='ourStoryLink'>Our Story &#8594;</Link>
          </div>
          
          <div className="imageBlock">
            <div className="image"></div>
          </div>
        </div>

        <div className="patoPlace">
          <div className='patoPlaceImg'></div>
          <div className='patoTextBlock'>
            <h1 className='patoItalic'>Discover</h1>
            <p className='patoTitle'>P A T O  &nbsp;&nbsp;P L A C E</p>
          </div>
        </div>

        <div className="ourMenu">

          <div className="menuDiscover">
            <h1>Discover</h1>
            <p>O U R &nbsp;&nbsp; M E N U</p>
          </div>
          <div className="menuGrid">
              <div className='item1'>
                <div className='gridImage1'></div>
                <button className="menuCardBtn">L U N C H</button>
              </div>
              <div className='item2'>
                <div className='gridImage2'></div>
                <button className="menuCardBtn">D I N N E R</button>
              </div>
              <div className='item3'>
                <div className='gridImage3'></div>
                <button className="menuCardBtn">D R I N K S</button>
              </div>
              <div className='item4'>
                <div className='gridImage4'></div>
                <button className="menuCardBtn">S T A R T E R S</button>

              </div>
              <div className='item5'>
                <div className='gridImage5'></div>
                <button className="menuCardBtn">H A P P Y &nbsp;H O U R S</button>
              </div>
              <div className="item6">
                <div className='gridImage6'></div>
                <button className="menuCardBtn">D E S S E R T S</button>
              </div>
            </div>

        </div>

        <div className="video">
            <div className="slidesBrideImage">
                <div className="bridgeImage"></div>
            </div>
            <div className="videoContent">
                <div className="aboutUsVideo">
                    <h1>Discover</h1>
                    <p>O U R  &nbsp;&nbsp;V I D E O </p>
                    <FontAwesomeIcon className='playIcon' onClick={toggleShowVideo} icon={faCirclePlay} />
                </div>
                {
                    video && <DisplayVideo state={video} setState={showVideo}/>
                }
            </div>
        </div>

      <div className="reservationTable">

        <div className="reservationText">
            <div className="reservationTextBlock">
              <h2>Reservation</h2>
              <p>B O O K &nbsp; T A B L E</p>
            </div>

          <div className="reservationForm">
            <div className="rows">
              <div className='date'>
                <label htmlFor="date">Date</label>
                <input type="date" name="date"/>
              </div>
              <div className="Name">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder='Name'/>
              </div>
            </div>
          
            <div className="rows">
              <div className='time'>
                <label htmlFor="time">Time</label>
                <input type="text" placeholder='Time'/>
              </div>
              <div className='mobile'>
                <label htmlFor="phone">Phone</label>
                <input type="text" placeholder='Phone'/>
              </div>
            </div>

            <div className="rows">
              <div className='people'>
                <label htmlFor="people">People</label>
                <input type="text" placeholder='People'/>
              </div>
              <div className='email'>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Email'/>
              </div>
            </div>
            <div className="rows">
              <div className="bookBtn">
                <button className='submitBtn'>BOOK TABLE</button>
              </div>
            </div>
            
          </div>   
        </div>

        <div className="reservationImage">
          <div className="tableImage"></div>
        </div>

      </div>

    </div>
  )
}

export default Content