import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useBreakpoint from 'hooks/use-breakpoint';
import Button from 'components/shared/Button';
import './StepSectionL1.scss';

const StepSectionL1 = (props) => {
  const { children, title, subtitle, keepOpen } = props;
  const isGtSm = useBreakpoint('gt-sm');

  // State
  const [open, setOpen] = useState(keepOpen);

  const header = (
    <div styleName="header">
      <h4 styleName="header__title">{title}</h4>
      <div styleName="header__subtitle">{subtitle}</div>
    </div>
  );

  const toggle = (
    <div styleName="toggle">
      <Button
        variant="secondary"
        endIcon="chevron-down"
        click={() => setOpen(!open)}
      >
        Expand
      </Button>
    </div>
  );

  return (
    <div styleName="frame">
      {header}
      {!isGtSm && !open && toggle}
      {(isGtSm || open) && <div styleName="main">{children}</div>}
    </div>
  );
};

StepSectionL1.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  keepOpen: PropTypes.bool,
};

StepSectionL1.defaultProps = {
  keepOpen: false,
};

export default StepSectionL1;
