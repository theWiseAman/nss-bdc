import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import './Home.scss'
import Timeline from "../Timeline/Timeline";
import SlideShow from '../SlideShow/SlideShow';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Timeline />
      <SlideShow />
    </div>
  )
}

export default Home