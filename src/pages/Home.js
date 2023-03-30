import React from 'react';
import Carousel from '../components/Carousel';
import UpcomingMov from '../components/UpcomingMov';
import Recommended from '../components/Recommended';
import Trendingnow from '../components/Trendingnow';
import Highlyrated from '../components/Highlyrated';
import Cartoons from '../components/Cartoons';
import HBOseries from '../components/HBOseries';

const Home = () => {
  return (
    <div>
        <Carousel />
        <UpcomingMov />
        <Recommended />
        <Trendingnow />
        <Highlyrated />
        <Cartoons />
        <HBOseries />
    </div>
  )
}

export default Home
