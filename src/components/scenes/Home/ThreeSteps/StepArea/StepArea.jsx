import React from 'react';
import PropTypes from 'prop-types';
import './StepArea.scss';

const StepArea = (props) => {
  const { children, title, subtitle } = props;

  return (
    <div styleName="frame">
      <div styleName="header">
        <h4 styleName="header__title">{title}</h4>
        <div styleName="header__subtitle">{subtitle}</div>
      </div>
      <div styleName="main">{children}</div>
    </div>
  );
};

StepArea.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default StepArea;
