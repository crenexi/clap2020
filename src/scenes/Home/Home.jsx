import React from 'react';
import ThisIsWar from './ThisIsWar';
import ThreeSteps from './ThreeSteps';
import ThankYouInvite from './ThankYouInvite';

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
