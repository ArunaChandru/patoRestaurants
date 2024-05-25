import React from 'react'
import Gallery from './Gallery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import './footer.css'

function footer() {
  return (
    <div className="footer">

        <div className="firstCol">
            <div className='contactUs'>
                <h3>C O N T A C T &nbsp;U S</h3>
                <div className="content">
                    <div>
                        <FontAwesomeIcon  className='icon' icon={faLocationDot} />
                        <p>7th floor, T Nagar, Chennai, Tamil Nadu</p>
                    </div>
                    <div>
                        <FontAwesomeIcon className='icon'  icon={faPhone} />
                        <p>+91 11223 34556</p>
                    </div>
                    <div>
                        <FontAwesomeIcon  className='icon' icon={faEnvelope} />
                        <p>contact@gamil.com</p>
                    </div>
                </div>
            <div className='openinTime'>
                <h3>O P E N I N G &nbsp;T I M E</h3>
                <div className="content">
                    <div>
                        <p>09:30 AM – 11:00 PM</p>
                        <p className='everyDay'>Every Day</p>
                    </div>
                </div>
                </div>
        </div>
        </div>

        <div className="secondCol">
            <h3>L A T E S T &nbsp; P O S T</h3>
            <div className="contentCol2">
               <div>
                    <FontAwesomeIcon icon={faTwitter} />
                    <h5>@pato_restaurant</h5>
                    <p className='twittContent'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <i className='link'>https://buff.ly/2zaSfAQ</i>
                    <p className='twittDate'>28 Jun 2022</p>
               </div>
               <div>
                    <FontAwesomeIcon icon={faTwitter} />
                    <h5>@pato_restaurant</h5>
                    <p className='twittContent'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <i className='link'>https://buff.ly/2zaSfAQ</i>
                    <p className='twittDate'>28 Jun 2022</p>
               </div>
            </div>
        </div>

        <div className="galleryComponent">
            <h3 className='galleryHead'>G A L L E R Y</h3>
            <Gallery />
        </div>
    </div>
  )
}

export default footer