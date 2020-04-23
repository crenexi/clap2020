import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../Hero';
import './Now.scss';

const Now = ({ heroCoverUrl }) => {
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

Now.propTypes = {
  heroCoverUrl: PropTypes.string.isRequired,
};

export default Now;
