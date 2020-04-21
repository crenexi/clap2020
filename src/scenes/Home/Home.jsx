import React from 'react';
import ThisIsWar from './components/ThisIsWar';
import ThreeSteps from './components/ThreeSteps';
import ThankYouInvite from './components/ThankYouInvite';

const Home = () => (
  <article>
    <section>
      <ThreeSteps />
    </section>
    <section>
      <ThisIsWar />
    </section>
    <section>
      <ThankYouInvite />
    </section>
  </article>
);

export default Home;
