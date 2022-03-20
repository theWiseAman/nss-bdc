import React, { useState } from 'react'
import './HeroSection.scss'


const HeroSection = () => {
  const [donateCount, setDonateCount] = useState(3000)

  return (
    <div className='hero-section'>
      <div className='background container-fluid p-4 p-md-5'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <div className='hero-content col-12 col-md-10 ms-md-5 my-3 mt-md-top1'>
              <h1>BLOOD DONATION CAMP</h1>
              <p className='mt-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget sed adipiscing quisque lectus auctor adipiscing amet. Nisl amet, ac sollicitudin velit lacus a odio urna. Orci leo pulvinar massa velit ipsum adipiscing urna cras hendrerit.
              </p>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <img className='pulse mob-hide col-12' src='./assets/pulse-animation.png' alt='Background' />
            <div className='video-container col-12 col-md-8 offset-md-2 my-3 mt-md-top2'>
              <iframe className='mt-0' src='/assets/sample-video.mp4' controls>
              </iframe>
            </div>
          </div>
        </div>
        <div className='donateCount col-12 col-md-6 ms-md-5 mt-5 mt-md--ve'>
          <p>
            No. of Donators so far : {donateCount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection