import React from 'react'
import './HeroSec.scss'
import background from './bg-droplets-blue.png'

const HeroSec = () => {
  return (
    <div className='hero'>
        <div className='main-hero p-5'>
            <h1 className='col-12 col-md-10 offset-md-1'>
                Blood Donation Camp (BDC) is one of the most anticipated event of NSS BITS Pilani. It is conducted in collaboration with the Indian Red Cross Society (IRCS), New Delhi.
            </h1>
        </div>
        <div className='venue-card row justify-content-center'>
            <div className='col-12 col-md-3 py-3 px-5 time-card card1'>
                <div className='venue mt-3'>
                    <span style={{fontSize: "1.8rem"}}>Join us at</span>
                    <br />
                    <span>Old SAC</span>
                    <br />
                    <span style={{fontSize: "1.8rem"}}>On</span>
                    <br />
                    <span>26th - 27th Mar</span>
                    <br />
                  </div>
            </div>
            <div className='col-12 col-md-3 py-3 px-5 time-card card2'>
                <div className='venue mt-3'>                    
                    <span style={{fontSize: "1.8rem"}}>Time</span>
                    <div className='col-auto'>
                        <div className='col-4 p-3 text-center time-block' style={{background: '#054483', borderRadius: '1rem'}}>
                            <div className='col-12' style={{color: 'white', fontSize: '1.75rem'}}>9:00</div>
                            <div className='col-12' style={{color: 'white'}}>AM</div>
                        </div>
                        <div style={{display:"inline-block"}}>to</div>
                        <div className='col-4 p-3 text-center time-block' style={{background: '#054483', borderRadius: '1rem'}}>
                            <div className='col-12' style={{color: 'white', fontSize: '1.75rem'}}>9:00</div>
                            <div className='col-12' style={{color: 'white'}}>PM</div>
                        </div>
                    </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSec