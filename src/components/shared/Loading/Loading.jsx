import React from 'react';
import PropTypes, { oneOfType, oneOf } from 'prop-types';
import FaIcon from '../FaIcon';
import './Loading.scss';

const Loading = ({ size, color, withStar }) => {
  const className = size ? `loading loading--${size}` : 'loading';
  const isSmallerSize = ['tiny', 'small'].includes(size);

  // Use different spinner weights based on size
  const iconPrefix = isSmallerSize ? 'fas' : 'fal';

  // Icon style
  const iconStyle = {
    animationDuration: '350ms',
    color: !color ? null : color,
  };

  // Star of life icon (not supported on tiny/small sizes)
  const starOfLife = (
    <div styleName="loading__star">
      <FaIcon icon="star-of-life" prefix="fas" />
    </div>
  );

  return (
    <div styleName={className}>
      {withStar && !isSmallerSize && starOfLife }
      <div styleName="loading__spinner">
        <FaIcon
          icon="spinner-third"
          prefix={iconPrefix}
          style={iconStyle}
          spin
        />
      </div>
    </div>
  );
};

Loading.propTypes = {
  size: oneOfType([() => null, oneOf(['tiny', 'small', 'large'])]),
  color: oneOfType([() => null, PropTypes.string]),
  withStar: PropTypes.bool,
};

Loading.defaultProps = {
  size: null,
  color: null,
  withStar: false,
};

export default Loading;
