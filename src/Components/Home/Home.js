import React from 'react'
import './Home.scss'
import Timeline from "../Timeline/Timeline";
import SlideShow from '../SlideShow/SlideShow';
import Contacts from '../Contacts/Contacts';
import DoesAndDonts from '../DosAndDonts/DosAndDonts';
import HeroSec from './HeroSec/HeroSec';


const Home = () => (
  <div>
    <HeroSec />
    <Timeline />
    <DoesAndDonts />
    <SlideShow />
    <Contacts />
  </div>
)

export default Home