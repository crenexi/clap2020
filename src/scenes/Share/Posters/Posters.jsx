import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../Hero';
import './Posters.scss';

const Posters = ({ heroCoverUrl }) => {
  const hero = (
    <Hero
      url={heroCoverUrl}
      imagePosition="50% 25%"
      title="Grab"
      subtitle="images &amp; flyers"
    />
  );

  return (
    <div styleName="frame">
      <div styleName="hero">{hero}</div>
    </div>
  );
};

Posters.propTypes = {
  heroCoverUrl: PropTypes.string.isRequired,
};

export default Posters;
