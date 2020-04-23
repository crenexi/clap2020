import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../Hero';
import './Press.scss';

const Press = ({ heroCoverUrl }) => {
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

Press.propTypes = {
  heroCoverUrl: PropTypes.string.isRequired,
};

export default Press;
