import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FaIcon = (props) => {
  const { icon, prefix, size, fixedWidth } = props;
  const { rotation, border, pulse, spin, style } = props;

  return (
    <FontAwesomeIcon
      icon={[prefix, icon]}
      size={size}
      rotation={rotation}
      fixedWidth={fixedWidth}
      border={border}
      pulse={pulse}
      spin={spin}
      style={style}
    />
  );
};

FaIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  prefix: PropTypes.string,
  size: oneOfType([() => null, PropTypes.string]),
  rotation: oneOfType([() => null, PropTypes.number]),
  fixedWidth: oneOfType([() => null, PropTypes.bool]),
  border: oneOfType([() => null, PropTypes.bool]),
  pulse: oneOfType([() => null, PropTypes.bool]),
  spin: oneOfType([() => null, PropTypes.bool]),
  style: oneOfType([() => null, PropTypes.object]),
};

FaIcon.defaultProps = {
  prefix: 'fal',
  size: null,
  rotation: null,
  fixedWidth: null,
  border: null,
  pulse: null,
  spin: null,
  style: null,
};

export default FaIcon;
