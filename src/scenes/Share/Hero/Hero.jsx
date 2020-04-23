import React from 'react';
import PropTypes from 'prop-types';
import { BgCover } from '@components/ui';
import './Hero.scss';

const Hero = (props) => {
  const { url, imagePosition, title, subtitle } = props;

  return (
    <BgCover
      url={url}
      imagePosition={imagePosition}
      blanketColor="rgba(0, 0, 0, .5)"
      blend={{
        color: 'rgba(0, 0, 0, .5)',
        mode: 'multiply',
      }}
    >
      <div styleName="main">
        <div styleName="main__title">{title}</div>
        <div styleName="main__subtitle">{subtitle}</div>
      </div>
    </BgCover>
  );
};

Hero.propTypes = {
  url: PropTypes.string.isRequired,
  imagePosition: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Hero;
