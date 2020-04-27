import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shareCardStateType from '@types/share-card-state-type';
import scrollService from '@services/scroll-service';
import useBreakpoint from '@hooks/use-breakpoint';
import Options from './Options';

const OptionsContainer = (props) => {
  const { shareState, onSetShareState } = props;
  const isGtXs = useBreakpoint('gt-xs');

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    if (!isGtXs && open) {
      scrollService.scrollToElement('shareCard', -15);
    }

    setOpen(!open);
  };

  const handlePosterChange = (updates) => {
    onSetShareState({
      poster: { ...shareState.poster, ...updates },
    });
  };

  return (
    <Options
      open={open}
      posterValue={shareState.poster}
      onToggle={handleToggle}
      onPosterChange={handlePosterChange}
    />
  );
};

OptionsContainer.propTypes = {
  shareState: shareCardStateType.isRequired,
  onSetShareState: PropTypes.func.isRequired,
};

export default OptionsContainer;
