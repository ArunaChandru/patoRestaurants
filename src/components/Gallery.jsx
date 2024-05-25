import React from 'react'
import image from './images/img1.png'
import image2 from './images/img2.webp' 
import image3 from './images/img3.webp'

import image4 from './images/img4.webp'
import image5 from './images/img5.webp' 
import image6 from './images/img6.webp'

import image7 from './images/img7.webp'
import image8 from './images/img8.webp' 
import image9 from './images/img9.webp'


function Gallery() {
  return (
    <div className='galleryGrid'>
      <img src={image} alt="" />
      <img src={image2} alt="" />
      <img src={image3} alt="" />

      <img src={image4} alt="" />
      <img src={image5} alt="" />
      <img src={image6} alt="" />

      <img src={image7} alt="" />
      <img src={image8} alt="" />
      <img src={image9} alt="" />
    </div>
  )
}

export default Gallery