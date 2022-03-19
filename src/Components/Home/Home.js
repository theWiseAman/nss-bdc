import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import './Home.scss'
import Timeline from "../Timeline/Timeline";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <HeroSection />
      <Timeline />
    </div>
  )
}

export default Home