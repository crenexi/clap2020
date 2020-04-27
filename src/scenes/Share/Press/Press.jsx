import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../Hero';
import './Press.scss';

const Press = ({ heroCoverUrl }) => {
  return (
    <div styleName="frame">
      <Hero
        url={heroCoverUrl}
        imagePosition="center center"
        title="Rally"
        subtitle="the nation"
      />
    </div>
  );
};

Press.propTypes = {
  heroCoverUrl: PropTypes.string.isRequired,
};

export default Press;
