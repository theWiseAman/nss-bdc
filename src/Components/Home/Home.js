import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import './Home.scss'
import Timeline from "../Timeline/Timeline";
import SlideShow from '../SlideShow/SlideShow';
import Contacts from '../Contacts/Contacts';


const Home = () => {
  return (
    <div>
      <HeroSection />
      <Timeline />
      <SlideShow />
      <Contacts />
    </div>
  )
}

export default Home