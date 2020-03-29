import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FaIcon = (props) => {
  const { icon, size, fixedWidth } = props;
  const { rotation, border, pulse, spin } = props;

  return (
    <FontAwesomeIcon
      icon={['fal', icon]}
      size={size}
      rotation={rotation}
      fixedWidth={fixedWidth}
      border={border}
      pulse={pulse}
      spin={spin}
    />
  );
};

FaIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
  rotation: PropTypes.number,
  fixedWidth: PropTypes.bool,
  border: PropTypes.bool,
  pulse: PropTypes.bool,
  spin: PropTypes.bool,
};

FaIcon.defaultProps = {
  size: null,
  rotation: null,
  fixedWidth: null,
  border: null,
  pulse: null,
  spin: null,
};

export default FaIcon;
