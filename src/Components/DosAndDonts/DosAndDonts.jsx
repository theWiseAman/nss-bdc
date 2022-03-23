import React from 'react'
import './DosAndDonts.scss'
import { Typewriter } from "react-simple-typewriter";


const DoesAndDonts = () => {
  return (
    <div className='container py-4' id="dos-and-donts">
      <div className='row mx-3'>
        <h1 className='col-12 text-center'>
          <Typewriter 
                cursor
                cursorStyle='_'
                typeSpeed={60}
                deleteSpeed={30}
                delaySpeed={1000}
                loop={1}
                words={[`Do's And Don'ts`]}
            />
        </h1>
        <ul className='col-12 my-3 col-md-6'>
          <h3>Do's</h3>
          <li>Drink an extra half-liter of bottle 6 hours before donation.</li>
          <li>Have a sufficient healthy meal 2-3 hours before donation.</li>
          <li>Have adequate amount of sleep before donation.</li>
        </ul>
        <ul className='col-12 my-3 col-md-6'>
          <h3>Don'ts</h3>
          <li>Do not consume alcohol or cigarettes 72 hours prior to donation.</li>          
          <li>Avoid donating blood in case you had any tattoo or piercing in the last 12 months.</li>          
          <li>Avoid donating blood if you are covid positive or vaccinated in the last 14 days.</li>          
          <li>Avoid antibiotics/antihistamines 72 hours prior to donation.</li> 
          <li>Avoid donating blood if you have been diagnosed with Dengue or Typhoid in the past six months.</li>          
        </ul>
      </div>
    </div>
  )
}

export default DoesAndDonts