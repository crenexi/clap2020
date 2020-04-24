import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../Hero';
import './Now.scss';

const Now = ({ heroCoverUrl }) => {
  return (
    <div styleName="frame">
      <Hero
        url={heroCoverUrl}
        imagePosition="0% 30%"
        title="POST"
        subtitle="hashtags &amp; posters"
      />
    </div>
  );
};

Now.propTypes = {
  heroCoverUrl: PropTypes.string.isRequired,
};

export default Now;
