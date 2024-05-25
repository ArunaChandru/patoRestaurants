import React from 'react'
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faClock} from '@fortawesome/free-solid-svg-icons';
import './contact.css'
function Contact() {

  const name=useRef()
  const email=useRef()
  const phone=useRef()
  const message=useRef()
 
  const handleOnKeyDown=(e,nextRef)=>{
    if(e.key==='Enter' || e.key==='Tab'){
        nextRef.current.focus();
        return;
    }
  }
  return (
    <div className="contact">
        <div className="HeadimageContact">
            <div className="textBlock">
                <h2 className='menuTitleContact'>C O N T A C T</h2>
            </div>
        </div>

        <div className="sendMessage">
            <h2>S E N D &nbsp; U S &nbsp; A &nbsp; M E S S A G E</h2>
            <div className="userDetail">
                <div className="userName">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder='Name' 
                    onKeyDown={(e)=>handleOnKeyDown(e,email)}
                    ref={name}/>
                </div>
                <div className="userMail">
                    <label htmlFor="mail">Email</label>
                    <input type="email" id="email" placeholder='Email' 
                    onKeyDown={(e)=>handleOnKeyDown(e,phone)}
                    ref={email}/>
                </div>
                <div className="phone">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" placeholder='Phone' 
                    onKeyDown={(e)=>handleOnKeyDown(e,message)}
                    ref={phone}/>
                </div>
            </div>
            <div className="userMessage">
                <div className="Message">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="20" rows="10" 
                    ref={message}></textarea>
                </div>
            </div>
            <div className="button">
                <button type="submit" className='submitBtn'>SUBMIT</button>
            </div>
        </div>
        
        <div className="contactFlex">
            <div className='location'>
                <FontAwesomeIcon className='contactIcon' icon={faLocationDot} />
                <div className="contactTextBlock">
                    <h3>L O C A T I O N</h3>
                    <p>7th floor, T Nagar, Chennai, Tamil Nadu</p>
                </div>
            </div>
            <div className='mobilePhone'>
                <FontAwesomeIcon className='contactIcon' icon={faPhone} />
                <div className="contactTextBlock">
                    <h3>C A L L &nbsp;U S</h3>
                    <p>+91 11223 34556</p>
                </div>
            </div>
            <div className='openHour'>
                <FontAwesomeIcon className='contactIcon' icon={faClock}/>
                <div className="contactTextBlock">
                    <h3>O P E N I N G  &nbsp;H O U R S</h3>
                    <p>09:30 AM - 11:00 PM</p>
                    <p>Every Day</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Contact