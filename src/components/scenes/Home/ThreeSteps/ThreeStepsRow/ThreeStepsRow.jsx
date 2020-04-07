import React from 'react';
import PropTypes from 'prop-types';
import './ThreeStepsRow.scss';

const ThreeStepsRow = ({ children, step, theme }) => {
  const borderStyle = {
    backgroundColor: theme,
  };

  return (
    <div styleName="row">
      <div styleName="row__left-border" style={borderStyle} />
      <div styleName="row__num">{step}</div>
      <div styleName="row__main">{children}</div>
    </div>
  );
};

ThreeStepsRow.propTypes = {
  children: PropTypes.node.isRequired,
  step: PropTypes.number.isRequired,
  theme: PropTypes.string.isRequired,
};

export default ThreeStepsRow;
