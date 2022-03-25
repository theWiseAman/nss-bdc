import React, { useState, useEffect } from 'react'
import './HeroSec.scss'

import sanityClient from '../../../client'
import { useSpring, animated, config } from 'react-spring'


const HeroSec = () => {
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
    <div className='hero'>
        <div className='main-hero p-5'>
            <h1 className='col-12 col-md-10 offset-md-1'>
                Blood Donation Camp (BDC) is one of the most anticipated event of NSS BITS Pilani. It is conducted in collaboration with the Indian Red Cross Society (IRCS), New Delhi.
            </h1>
        </div>
        <div className='venue-card container-fluid'>
            <div className='row d-flex justify-content-center'>
                <div className='col-12 col-md-auto m-md-3 py-3 px-5 time-card card2'>
                    <div className='venue mt-3'>                  
                        <div style={{fontSize: "1.8rem", fontWeight: "500"}}>No. of Donators so far</div>
                        <div className='col-auto d-flex align-items-center justify-content-center'>
                            <div className='col-auto p-3 text-center time-block' style={{background: '#022649', borderRadius: '1rem'}}>
                                <div className='col-12' style={{color: 'white', fontSize: '1.75rem'}}>
                                    <animated.div className='main-count'>
                                        {number.to(n => n.toFixed(0))}
                                    </animated.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-12 col-xl-auto d-md-flex justify-content-center p-0'>
                    <div className='col-12 col-md-5 m-md-3 col-lg-4 col-xl-auto py-3 px-5 time-card card1'>
                        <div className='venue mt-3'>
                            <span style={{fontSize: "1.8rem", fontWeight: "500"}}>Join us at</span>
                            <br />
                            <span>Old SAC, BITS Pilani</span>
                            <br />
                            <span style={{fontSize: "1.8rem", fontWeight: "500"}}>On</span>
                            <br />
                            <span>26th - 27th Mar</span>
                            <br />
                        </div>
                    </div>
                    <div className='col-12 col-md-auto m-md-3 py-3 px-5 time-card card2'>
                        <div className='venue mt-3'>                    
                            <span style={{fontSize: "1.8rem", fontWeight: "500"}}>Time</span>
                            <div className='col-auto d-flex align-items-center justify-content-center'>
                                <div className='col-auto p-3 text-center time-block' style={{background: '#022649', borderRadius: '1rem'}}>
                                    <div className='col-12' style={{color: 'white', fontSize: '1.75rem'}}>9:00</div>
                                    <div className='col-12' style={{color: 'white'}}>AM</div>
                                </div>
                                <div className='col-auto' style={{display:"inline-block", fontSize: '1.4rem'}}>to</div>
                                <div className='col-auto p-3 text-center time-block' style={{background: '#022649', borderRadius: '1rem'}}>
                                    <div className='col-12' style={{color: 'white', fontSize: '1.75rem'}}>9:00</div>
                                    <div className='col-12' style={{color: 'white'}}>PM</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSec