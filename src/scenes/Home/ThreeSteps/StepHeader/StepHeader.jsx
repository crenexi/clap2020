import React from 'react';
import PropTypes from 'prop-types';
import FaIcon from 'components/shared/FaIcon';
import './StepHeader.scss';

const StepHeader = ({ title, icon, theme }) => {
  const style = {
    color: theme,
  };

  return (
    <div styleName="heading" style={style}>
      <h3 styleName="heading__title">{title}</h3>
      <div styleName="heading__icon">
        <FaIcon icon={icon} />
      </div>
    </div>
  );
};

StepHeader.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};

export default StepHeader;
