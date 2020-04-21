import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import uniqueId from 'lodash.uniqueid';
import './QuickNavBar.scss';

const QuickNavBar = ({ items }) => (
  <div styleName="bar">
    <div styleName="nav">
      {items.map(item => (
        <div styleName="nav-item" key={uniqueId()}>{item}</div>
      ))}
    </div>
  </div>
);

QuickNavBar.propTypes = {
  items: arrayOf(PropTypes.node).isRequired,
};

export default QuickNavBar;
