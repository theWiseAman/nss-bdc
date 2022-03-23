import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import './Home.scss'
import Timeline from "../Timeline/Timeline";
import SlideShow from '../SlideShow/SlideShow';
import Contacts from '../Contacts/Contacts';
import DoesAndDonts from '../DosAndDonts/DosAndDonts';


const Home = () => {
  return (
    <div>
      <HeroSection />
      <Timeline />
      <DoesAndDonts />
      <SlideShow />
      <Contacts />
    </div>
  )
}

export default Home