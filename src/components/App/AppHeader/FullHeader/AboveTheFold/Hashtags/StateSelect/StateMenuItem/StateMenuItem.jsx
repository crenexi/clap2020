import React from 'react';
import PropTypes from 'prop-types';
import './StateMenuItem.scss';

const StateMenuItem = ({ stateKey, thumbUrl }) => {
  const thumbStyle = { backgroundImage: `url('${thumbUrl}')` };

  return (
    <div styleName="state">
      <div styleName="state__thumb" style={thumbStyle} />
      <div styleName="state__name">{`#${stateKey}`}</div>
    </div>
  );
};

StateMenuItem.propTypes = {
  stateKey: PropTypes.string.isRequired,
  thumbUrl: PropTypes.string.isRequired,
};

export default StateMenuItem;
