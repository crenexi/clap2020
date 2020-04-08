import React from 'react';
import useBreakpoint from 'hooks/use-breakpoint';
import Button from 'components/shared/Button';
import './QuickNavBar.scss';

const QuickNavBar = () => {
  const isGtSm = useBreakpoint('gt-sm');

  return (
    <div styleName="bar">
      <div styleName="bar__nav">
        <Button
          to="/?scrollTo=threeSteps"
          variant="secondary"
          startIcon="arrow-circle-left"
        >
          3 Steps
        </Button>
        {isGtSm && <div />}
        <Button
          to="/share"
          variant="primary"
          endIcon="arrow-circle-right"
        >
          Posters
        </Button>
      </div>
    </div>
  );
};

export default QuickNavBar;
