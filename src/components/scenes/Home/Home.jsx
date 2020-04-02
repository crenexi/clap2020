import React from 'react';
import ThisIsWar from './ThisIsWar';
import ThreeSteps from './ThreeSteps';
import ThankYou from './ThankYou';
import FollowUs from './FollowUs';
import './Home.scss';

const Home = () => (
  <article styleName="home">
    <ThreeSteps />
    <ThisIsWar />
    <ThankYou />
    <FollowUs />
  </article>
);

export default Home;
