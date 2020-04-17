import React from 'react';
import PropTypes, { oneOf } from 'prop-types';
import classNames from 'classnames';
import FaIcon from '../FaIcon';
import './Loading.scss';

const Loading = ({ size, color, center, withStar }) => {
  const frameStyleName = classNames('frame', {
    'frame--center': center,
  });

  const loadingStyleName = classNames('loading', {
    [`loading--${size}`]: size,
  });

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
    <div styleName={frameStyleName}>
      <div styleName={loadingStyleName}>
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
    </div>
  );
};

Loading.propTypes = {
  size: oneOf(['tiny', 'small', 'large']),
  color: PropTypes.string,
  center: PropTypes.bool,
  withStar: PropTypes.bool,
};

Loading.defaultProps = {
  size: '',
  color: '',
  center: false,
  withStar: false,
};

export default Loading;
