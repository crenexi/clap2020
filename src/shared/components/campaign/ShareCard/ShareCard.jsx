import React from 'react';
import PropTypes from 'prop-types';
import './ShareCard.scss';

const ShareCard = ({ children, overline }) => {
  return (
    <div styleName="frame">
      <div styleName="card">
        <div styleName="overline">{overline}</div>
        <div styleName="main">{children}</div>
        <div styleName="actions">
          Actions...
        </div>
      </div>
    </div>
  );
};

ShareCard.propTypes = {
  children: PropTypes.node.isRequired,
  overline: PropTypes.string.isRequired,
};

export default ShareCard;
