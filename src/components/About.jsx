import React from 'react'
import DisplayVideo from './DisplayVideo'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import chef1 from './images/canYamanChef.jpg'
import chef2 from './images/chef2.jpg'
import chef3 from './images/chef3.jpg'


function About() {
  
  const [video, showVideo]=useState(false)

  const toggleShowVideo=()=>{
    showVideo(!video)
  }
  return (
    <div className="aboutUs">

        <div className="Aboutimage">
            <div className="textBlock">
                <h2 className='AboutTitle'>A B O U T&nbsp; U S</h2>
            </div>
        </div>

        <div className="restaurantStory">
            <div className="textBlock">
                <h1 className='italicTitle'>Italian Restaurant</h1>
                <p className='title'>W E L C O M E</p>
            </div>
            <div className="Paragraph">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa mollitia, totam rerum iste culpa velit alias. Nam rerum illum voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, vero.</p>
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

        <div className="italianRestaurant">
          <div className="textBlock">
            <h1 className='italicTitle'>Italian Restaurant</h1>
            <p className='title'>W E L C O M E</p>
            <div className='paragraph'>
            <p>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.</p>
            </div>
          </div>
          
          <div className="imageBlock">
            <div className="image"></div>
          </div>
        </div>
        
        <div className="RomanticRestaurant">

            <div className="imageBlockRomance">
              <div className="imagePlace"></div>
            </div>
            <div className="textBlock">
              <h1 className='italicTitle'>Romantic</h1>
              <p className='title'>R E S T A U R E N T</p>
              <div className='paragraph'>
              <p>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, expedita.</p>
              </div>
            </div>

        </div>
        
        
        <div className="imageDiv">
          <div className='blackBg'></div>
        </div>

        <div className="ourChief">

          <div className="heading">
            <h1 className='meetOur'>Meet Our</h1>
            <h1>C H E F</h1>
          </div>

          <div className="photoCard">

            <div className="canYaman">
              <div className="chefImage">
                  <img className='imgChef' src={chef1} alt="Chef Image" />
              </div>
              <div className="chefDetail">
                <h3>Can Yaman</h3>
                <h5>CHEF</h5>
                <p className='detail'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum omnis illo minima repellendus molestiae aut.</p>
              </div>
            </div>

            <div className="canYaman">
              <div className="chefImage">
                  <img className='imgChef' src={chef2} alt="Chef Image" />
              </div>
              <div className="chefDetail">
                <h3>Harry Potter</h3>
                <h5>CHEF</h5>
                <p className='detail'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum omnis illo minima repellendus molestiae aut.</p>
              </div>
            </div>

            <div className="canYaman">
              <div className="chefImage">
                  <img className='imgChef' src={chef3} alt="Chef Image" />
              </div>
              <div className="chefDetail">
                <h3>Gayathri sid</h3>
                <h5>CHEF</h5>
                <p className='detail'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum omnis illo minima repellendus molestiae aut.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
}

export default About