import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../Hero';
import './Intro.scss';

const Intro = ({ heroCoverUrl }) => {
  const hero = (
    <Hero
      url={heroCoverUrl}
      imagePosition="70% 55%"
      title="Spread"
      subtitle="the word, not the virus"
    />
  );

  return (
    <div styleName="frame">
      <div styleName="hero">{hero}</div>
    </div>
  );
};

Intro.propTypes = {
  heroCoverUrl: PropTypes.string.isRequired,
};

export default Intro;
