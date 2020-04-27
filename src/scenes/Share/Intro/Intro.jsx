import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Hero from '../Hero';
import CopySite from './CopySite';
import CopyPoster from './CopyPoster';
import CopyCountdown from './CopyCountdown';

const Intro = ({ heroCoverUrl }) => (
  <Fragment>
    <Hero
      url={heroCoverUrl}
      imagePosition="70% 55%"
      title="Spread"
      subtitle="the word, not the virus"
    />
    <CopySite />
    <CopyPoster />
    <CopyCountdown />
  </Fragment>
);

Intro.propTypes = {
  heroCoverUrl: PropTypes.string.isRequired,
};

export default Intro;
