import React from 'react';
import PropTypes from 'prop-types';
import FaIcon from 'components/shared/FaIcon';
import './StepSectionL2.scss';

const StepSectionL2 = (props) => {
  const { children, title, endIcon } = props;

  return (
    <div styleName="frame">
      <div styleName="header">
        {endIcon && (
          <div styleName="header__icon">
            <FaIcon styleName="header__icon" icon={endIcon} />
          </div>
        )}
        <div styleName="header__title">{title}</div>
      </div>
      <div styleName="main">{children}</div>
    </div>
  );
};

StepSectionL2.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  endIcon: PropTypes.string,
};

StepSectionL2.defaultProps = {
  endIcon: '',
};

export default StepSectionL2;
