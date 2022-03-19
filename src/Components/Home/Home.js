import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import './Home.scss'
import Timeline from "../Timeline/Timeline";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Timeline />
    </div>
  )
}

export default Home