import React, { useState, useEffect } from 'react'
import './HeroSec.scss'
import background from './bg-droplets-blue.png'
import { useSpring, animated, config } from 'react-spring'
import sanityClient from '../../../client'


const HeroSec = () => {
    const [donateCount, setDonateCount] = useState(0);
    const { number } = useSpring({
    reset: false,
    from: { number: 0 },
    number: donateCount,
    delay: 200,
    config: config.molasses,
  })

  return (
    <div className='hero'>
        <div className='main-hero p-5'>
            <h1 className='col-12 col-md-10 offset-md-1'>
                Blood Donation Camp (BDC) is one of the most anticipated event of NSS BITS Pilani. It is conducted in collaboration with the Indian Red Cross Society (IRCS), New Delhi.
            </h1>
        </div>
        <div className='venue-card row justify-content-center'>
            <div className='col-12 col-md-auto py-3 px-5 time-card card1'>
                <div className='venue mt-3'>
                    <span style={{fontSize: "1.6rem", fontWeight: "500"}}>Join us at</span>
                    <br />
                    <span>Old SAC, BITS Pilani</span>
                    <br />
                    <span style={{fontSize: "1.6rem", fontWeight: "500"}}>On</span>
                    <br />
                    <span>26th - 27th Mar</span>
                    <br />
                    <span style={{fontSize: "1.6rem", fontWeight: "500"}}>From</span>
                    <br />
                    <span>9:00 AM to 9:00 PM</span>
            
                  </div>
            </div>
            <div className='col-12 col-md-auto py-3 px-5 time-card card2'>
                <div className='venue mt-3'>                    
                    <span style={{fontSize: "1.8rem", fontWeight: "500"}}>Donators so far</span>
                    <div className='col-auto d-flex align-items-center justify-content-center'>
                        <div className='col-auto p-3 text-center time-block' style={{background: '#022649', borderRadius: '1rem', padding:"1rem"}}>
                            <div className='col-12' style={{color: 'white', fontSize: '2.2rem', padding:"0.5rem"}}><animated.div className='main-count'>
                  844
                </animated.div></div>
                        </div>
                    </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSec