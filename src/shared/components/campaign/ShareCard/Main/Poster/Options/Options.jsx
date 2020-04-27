import React from 'react';
import PropTypes from 'prop-types';
import MuiButtonBase from '@material-ui/core/ButtonBase';
import posterSelectionType from '@types/poster-selection-type';
import useBreakpoint from '@hooks/use-breakpoint';
import { Button, FaIcon } from '@components/ui';
import { PosterSelect } from '@components/campaign';
import './Options.scss';

const Options = (props) => {
  const { open, posterValue, onToggle, onPosterChange } = props;

  const isGtXs = useBreakpoint('gt-xs');

  // Toggle button
  const toggleButton = (() => {
    const label = open ? 'Hide' : 'Change';
    const icon = open ? 'minus' : 'plus';

    return (
      <MuiButtonBase style={{ width: '100%' }} onClick={onToggle}>
        <div styleName="toggle-btn">
          <div styleName="toggle-btn__label">{label}</div>
          <div styleName="toggle-btn__icon">
            <FaIcon icon={icon} />
          </div>
        </div>
      </MuiButtonBase>
    );
  })();

  // Close button
  const closeButton = (
    <div styleName="close-btn">
      {!isGtXs && (
        <Button endIcon="check-circle" click={onToggle}>
          Looks Good
        </Button>
      )}
    </div>
  );

  return (
    <div styleName="frame">
      {toggleButton}
      {open && (
        <div styleName="main">
          <PosterSelect
            selection={posterValue}
            onChange={onPosterChange}
          />
          {closeButton}
        </div>
      )}
    </div>
  );
};

Options.propTypes = {
  open: PropTypes.bool.isRequired,
  posterValue: posterSelectionType.isRequired,
  onToggle: PropTypes.func.isRequired,
  onPosterChange: PropTypes.func.isRequired,
};

export default Options;
