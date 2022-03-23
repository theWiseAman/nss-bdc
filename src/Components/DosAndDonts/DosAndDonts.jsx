import React from 'react'
import './DosAndDonts.scss'

const DoesAndDonts = () => {
  return (
    <div className='container m-4' id="dos-and-donts">
      <div className='row'>
        <h1 className='col-12 text-center'>
            Dos And Don'ts
        </h1>
        <img className='my-3 text-center col-12 offset-md-4 col-md-4' src='./assets/does-and-donts.jpeg' alt='Does and Donts Poster' />
      </div>
    </div>
  )
}

export default DoesAndDonts