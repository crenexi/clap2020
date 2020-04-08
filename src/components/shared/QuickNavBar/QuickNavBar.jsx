import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import './QuickNavBar.scss';

const QuickNavBar = ({ items }) => (
  <div styleName="bar">
    <div styleName="bar__nav">
      {items.map(item => (
        <div styleName="bar__nav-item">{item}</div>
      ))}
    </div>
  </div>
);

QuickNavBar.propTypes = {
  items: arrayOf(PropTypes.node).isRequired,
};

export default QuickNavBar;
