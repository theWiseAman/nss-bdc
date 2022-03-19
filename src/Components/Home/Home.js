import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import './Home.scss'
import Timeline from "../Timeline/Timeline";
import SlideShow from '../SlideShow/SlideShow';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <HeroSection />
      <SlideShow />
      <Timeline />
    </div>
  )
}

export default Home