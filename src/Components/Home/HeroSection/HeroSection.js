import React, { useState, useEffect } from 'react'
import './HeroSection.scss'
import { useSpring, animated, config } from 'react-spring'

import sanityClient from '../../../client'

const HeroSection = () => {
  const [donateCount, setDonateCount] = useState(0)

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "event" && title == "Blood Donation Camp"]{
        eventCount
      }`)
      .then((data) => setDonateCount(data[0].eventCount))
      .catch(console.error)
  }, [])


  const { number } = useSpring({
    reset: false,
    from: { number: 0 },
    number: donateCount,
    delay: 200,
    config: config.molasses,
  })

  return (
    <div className='hero-section'>
      <div className='background container-fluid py-3 pt-md-5 px-5'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <div className='hero-content col-12 col-md-10 ms-md-5 my-3'>
                <h1>BLOOD DONATION CAMP</h1>
                <p>
                  A single pint of blood can save 3 lives,
                  <br />
                  A single gesture of yours can create millions of smiles…!
                </p>
                <p className='mt-3'>
                  Blood Donation Camp(BDC) is one of the most anticipated events of NSS BITS Pilani. It is in collaboration with the Indian Red Cross Society(IRCS), New Delhi. 
                  <br />
                  <div className='venue mt-3'>
                    BDC '22 is organized on
                    <br />
                    <date>Date : </date> 26th and 27th March, 2022
                    <br />
                    <time>Time : </time> 9:00 AM - 9:00 PM
                    <br />
                    <span>Venue : </span> Old SAC, BITS Pilani
                  </div>
                </p>
            </div>
            {/* <div className='donateCount mob-hide'>
              <p className='col-12 col-md-6 ms-md-5'>
                No. of Donators so far
                <animated.div className='main-count'>
                  {number.to(n => n.toFixed(0))}
                </animated.div>
              </p>
            </div> */}
          </div>
          <div className='col-12 col-md-6'>
            <img className='pulse mob-hide col-12' src='./assets/pulse-animation.png' alt='Background' />
            <div className='video-container col-12 col-md-8 offset-md-2 my-3 mt-md-top2'>
              <video className='mt-0' controls>
                <source src='/assets/bdc-final-reveal.mp4' type='video/mp4' />
              </video>
            </div>
          </div>
          {/* <div className='donateCount desktop-hide'>
            <p className='col-12 col-md-6 ms-md-5'>
              No. of Donators so far
              <animated.div className='main-count'>
                {number.to(n => n.toFixed(0))}
              </animated.div>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default HeroSection