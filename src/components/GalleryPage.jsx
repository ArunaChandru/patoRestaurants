import React from 'react'
import { useState } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import './GalleryPage.css'

function GalleryPage() {

  const [allPhotoActive,setallPhotoActive]=useState(true)
  const [interiorActive,setInteriorActive]=useState(false)
  const [foodActive,setFoodActive]=useState(false)
  const [eventsActive,setEventsActive]=useState(false)
  const [vipGuestActive,setVipGuestActive]=useState(false)

  const activeAllPhoto=()=>{
    setallPhotoActive(true)
    setInteriorActive(false)
    setFoodActive(false)
    setEventsActive(false)
    setVipGuestActive(false)
  }
  const allPhotoClassName = classNames('linkBtn', {
    'active':allPhotoActive,
  });

  const activeInterior=(event)=>{
    setallPhotoActive(false)
    setInteriorActive(true)
    setFoodActive(false)
    setEventsActive(false)
    setVipGuestActive(false)

    console.log(event.target)
  }
  const interiorClassName = classNames('linkBtn', {
    'interiorPhoto active': interiorActive,
    'linkBtn': !interiorActive
  });

  const activeFood=()=>{
    setallPhotoActive(false)
    setInteriorActive(false)
    setFoodActive(true)
    setEventsActive(false)
    setVipGuestActive(false)
  }
  const FoodClassName = classNames('linkBtn', {
    'active': foodActive,
    'linkBtn': !foodActive
  });

  const activeEvents=()=>{
    setallPhotoActive(false)
    setInteriorActive(false)
    setFoodActive(false)
    setEventsActive(true)
    setVipGuestActive(false)
  }
  const eventsClassName = classNames('linkBtn', {
    'active': eventsActive,
    'linkBtn': !eventsActive
  });

  const activeVipGuest=()=>{
    setallPhotoActive(false)
    setInteriorActive(false)
    setFoodActive(false)
    setEventsActive(false)
    setVipGuestActive(true)
  }
  const vipGuestClassName = classNames('linkBtn', {
    'active': vipGuestActive,
    'linkBtn': !vipGuestActive
  });

  return (
    <div className="galleryComponent">
        <div className="reservationimage">
            <div className="GalleryTitle">
                <h1 className="reservationtitle">G A L L E R Y</h1>
            </div>
        </div>

        <div className="linkButtons">
           <button className={allPhotoClassName} onClick={activeAllPhoto}>ALL PHOTO</button>
           <button className={interiorClassName}  onClick={activeInterior}>INTERIOR</button>
           <button className={FoodClassName} onClick={activeFood}>FOOD</button>
           <button className={eventsClassName} onClick={activeEvents}>EVENTS</button>
           <button className={vipGuestClassName} onClick={activeVipGuest}>VIP GUESTS</button>
        </div>

        <div className="galleryImages" style={{ display: allPhotoActive ? 'flex' : 'none' }}>
            <div className="ImageRows">
              
              <div className="ImageDiv">
                <div className="Image1">
                  <div className="searchDiv"><button className="searchBtn"><FontAwesomeIcon className="searchIcon" icon={faSearch}/></button></div>
                </div>
              </div>

              <div className="ImageDiv">
                <div className="Image2">
                  <div className="searchDiv"><button className="searchBtn"><FontAwesomeIcon className="searchIcon" icon={faSearch}/></button></div>
                </div>
              </div>

              <div className="ImageDiv">
                <div className="Image3">
                  <div className="searchDiv"><button className="searchBtn"><FontAwesomeIcon className="searchIcon" icon={faSearch}/></button></div>
                </div>
              </div>

            </div>

            <div className="ImageRows">
              
              <div className="ImageDiv">
                <div className="Image4">
                  <div className="searchDiv"><button className="searchBtn"><FontAwesomeIcon className="searchIcon" icon={faSearch}/></button></div>
                </div>
              </div>

              <div className="ImageDiv">
                <div className="Image5">
                  <div className="searchDiv"><button className="searchBtn"><FontAwesomeIcon className="searchIcon" icon={faSearch}/></button></div>
                </div>
              </div>

              <div className="ImageDiv">
                <div className="Image6">
                  <div className="searchDiv"><button className="searchBtn"><FontAwesomeIcon className="searchIcon" icon={faSearch}/></button></div>
                </div>
              </div>

            </div>

            <div className="ImageRows">
              
              <div className="ImageDiv">
                <div className="Image7">
                  <div className="searchDiv"><button className="searchBtn"><FontAwesomeIcon className="searchIcon" icon={faSearch}/></button></div>
                </div>
              </div>

              <div className="ImageDiv">
                <div className="Image8">
                  <div className="searchDiv"><button className="searchBtn"><FontAwesomeIcon className="searchIcon" icon={faSearch}/></button></div>
                </div>
              </div>

              <div className="ImageDiv">
                <div className="Image9">
                  <div className="searchDiv"><button className="searchBtn"><FontAwesomeIcon className="searchIcon" icon={faSearch}/></button></div>
                </div>
              </div>

            </div>
        </div>

        <div className="interiorPhotos" style={{ display: interiorActive ? 'flex' : 'none' }}>
          <div className="ImageRows">
            <div className="ImageDiv">
              <div className="interiorImage1">
                <div className="searchDiv"><button className="searchBtn"><FontAwesomeIcon className="searchIcon" icon={faSearch}/></button></div>
              </div>
            </div>
          </div>

          <div className="ImageRows">
            <div className="ImageDiv">
              <div className="interiorImage2">
                <div className="searchDiv"><button className="searchBtn"><FontAwesomeIcon className="searchIcon" icon={faSearch}/></button></div>
              </div>
            </div>
          </div>

          <div className="ImageRows">
            <div className="ImageDiv">
              <div className="interiorImage3">
                <div className="searchDiv"><button className="searchBtn"><FontAwesomeIcon className="searchIcon" icon={faSearch}/></button></div>
              </div>
            </div>
          </div>
        </div>

        <div className="foodPhotos" style={{ display: foodActive? 'flex' : 'none' }}>
          <div className="ImageRows">
            <div className="ImageDiv">
              <div className="foodImage1">
                <div className="searchDiv"><button className="searchBtn"><FontAwesomeIcon className="searchIcon" icon={faSearch}/></button></div>
              </div>
            </div>
          </div>

          <div className="ImageRows">
            <div className="ImageDiv">
              <div className="foodImage2">
                <div className="searchDiv"><button className="searchBtn"><FontAwesomeIcon className="searchIcon" icon={faSearch}/></button></div>
              </div>
            </div>
          </div>

          <div className="ImageRows">
            <div className="ImageDiv">
              <div className="foodImage3">
                <div className="searchDiv"><button className="searchBtn"><FontAwesomeIcon className="searchIcon" icon={faSearch}/></button></div>
              </div>
            </div>
          </div>
        </div>

        <div className="eventsPhotos" style={{ display: eventsActive ? 'flex' : 'none' }}>
          <div className="ImageRows">
            <div className="ImageDiv">
              <div className="eventImage1">
                <div className="searchDiv"><button className="searchBtn"><FontAwesomeIcon className="searchIcon" icon={faSearch}/></button></div>
              </div>
            </div>
          </div>

          <div className="ImageRows">
            <div className="ImageDiv">
              <div className="eventImage2">
                <div className="searchDiv"><button className="searchBtn"><FontAwesomeIcon className="searchIcon" icon={faSearch}/></button></div>
              </div>
            </div>
          </div>

          <div className="ImageRows">
            <div className="ImageDiv">
              <div className="eventImage3">
                <div className="searchDiv"><button className="searchBtn"><FontAwesomeIcon className="searchIcon" icon={faSearch}/></button></div>
              </div>
            </div>
          </div>
        </div>

        <div className="vipGuestPhotos" style={{ display: vipGuestActive ? 'flex' : 'none' }}>
          <div className="ImageRows">
            <div className="ImageDiv">
              <div className="vipGuestImage1">
                <div className="searchDiv"><button className="searchBtn"><FontAwesomeIcon className="searchIcon" icon={faSearch}/></button></div>
              </div>
            </div>
          </div>

          <div className="ImageRows">
            <div className="ImageDiv">
              <div className="vipGuestImage2">
                <div className="searchDiv"><button className="searchBtn"><FontAwesomeIcon className="searchIcon" icon={faSearch}/></button></div>
              </div>
            </div>
          </div>

          <div className="ImageRows">
            <div className="ImageDiv">
              <div className="vipGuestImage3">
                <div className="searchDiv"><button className="searchBtn"><FontAwesomeIcon className="searchIcon" icon={faSearch}/></button></div>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default GalleryPage