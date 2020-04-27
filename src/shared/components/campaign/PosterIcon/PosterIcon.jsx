import React from 'react';
import { oneOf } from 'prop-types';
import logger from '@services/logger';
import './PosterIcon.scss';

const PosterIcon = ({ format }) => {
  // Ensure format is supported
  if (['story', 'square', 'rectangle'].some(f => f.name === format)) {
    logger.error('Poster icon format not supported');
    return null;
  }

  const styleName = `icon icon--${format}`;

  return (
    <div styleName={styleName} />
  );
};

PosterIcon.propTypes = {
  format: oneOf(['', 'story', 'square', 'rectangle']).isRequired,
};

export default PosterIcon;
