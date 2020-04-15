import React from 'react';
import PropTypes from 'prop-types';
import FaIcon from 'components/shared/FaIcon';
import './StepSection.scss';

const StepSection = (props) => {
  const { children, theme, title, endIcon } = props;

  const iconStyle = {
    color: theme,
  };

  return (
    <div styleName="frame">
      <div styleName="header">
        {endIcon && (
          <div styleName="header__icon" style={iconStyle}>
            <FaIcon styleName="header__icon" icon={endIcon} />
          </div>
        )}
        <h5>{title}</h5>
      </div>
      <div styleName="main">{children}</div>
    </div>
  );
};

StepSection.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  endIcon: PropTypes.string,
};

StepSection.defaultProps = {
  endIcon: '',
};

export default StepSection;
