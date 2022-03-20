import React, { useState } from 'react'
import './HeroSection.scss'


const HeroSection = () => {
  const [donateCount, setDonateCount] = useState(3000)

  return (
    <div className='hero-section'>
      <div className='background'>
        <div className='container'>
          <div className='row'>
            <div className='hero-content col-12 col-md-6'>
              <h1>BLOOD DONATION CAMP</h1>
              <p className='mt-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget sed adipiscing quisque lectus auctor adipiscing amet. Nisl amet, ac sollicitudin velit lacus a odio urna. Orci leo pulvinar massa velit ipsum adipiscing urna cras hendrerit.
              </p>
            </div>
            <div className='video-container col-12 col-md-auto offset-md-1'>
              <iframe src='/assets/sample-video.mp4' controls>
              </iframe>
            </div>
          </div>
          <p className='donateCount col-12 col-md-6'>
            No. of Donators so far : {donateCount}
          </p>
        </div>
        <img className='pulse' src='./assets/pulse-animation.png' alt='Background' />
        {/* <div className='bgd bgd-1 circle'></div>
        <div className='bgd bgd-2 triangle'></div>
        <div className='bgd bgd-3 triangle'></div> */}
      </div>
    </div>
  )
}

export default HeroSection