import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../Hero';
import './Intro.scss';

const Intro = ({ heroCoverUrl }) => {
  const hero = (
    <Hero
      url={heroCoverUrl}
      imagePosition="center center"
      title="Title"
      subtitle="Subtitle"
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
