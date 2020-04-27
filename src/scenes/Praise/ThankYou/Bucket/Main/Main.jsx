import React from 'react';
import PropTypes from 'prop-types';
import './Main.scss';

const Main = ({ children }) => (
  <div styleName="main-frame">
    <div styleName="main">{children}</div>
  </div>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
