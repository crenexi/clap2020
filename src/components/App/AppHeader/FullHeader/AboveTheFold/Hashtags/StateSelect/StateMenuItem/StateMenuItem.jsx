import React from 'react';
import PropTypes from 'prop-types';
import './StateMenuItem.scss';

const StateMenuItem = ({ stateTag, thumbUrl }) => {
  const thumbStyle = { backgroundImage: `url('${thumbUrl}')` };

  return (
    <div styleName="state">
      <div styleName="state__thumb" style={thumbStyle} />
      <div styleName="state__name">{stateTag}</div>
    </div>
  );
};

StateMenuItem.propTypes = {
  stateTag: PropTypes.string.isRequired,
  thumbUrl: PropTypes.string.isRequired,
};

export default StateMenuItem;
