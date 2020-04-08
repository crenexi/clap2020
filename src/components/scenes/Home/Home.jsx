import React from 'react';
import useBreakpoint from 'hooks/use-breakpoint';
import ThankYou from 'components/shared/ThankYou';
import ThisIsWar from './ThisIsWar';
import ThreeSteps from './ThreeSteps';
import './Home.scss';

const Home = () => {
  const isGtSm = useBreakpoint('gt-sm');

  return (
    <article styleName="home">
      <section><ThreeSteps /></section>
      <section><ThisIsWar /></section>
      {isGtSm && <section><ThankYou /></section>}
    </article>
  );
};

export default Home;
