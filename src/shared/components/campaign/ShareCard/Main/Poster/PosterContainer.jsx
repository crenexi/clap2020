import React from 'react';
import PropTypes from 'prop-types';
import shareCardStateType from '@types/share-card-state-type';
import Poster from './Poster';

const PosterContainer = (props) => {
  const { shareState, onSetShareState } = props;

  const handleHasPosterChange = (event) => {
    onSetShareState({ hasPoster: event.target.checked });
  };

  return (
    <Poster
      shareState={shareState}
      onSetShareState={onSetShareState}
      onHasPosterChange={handleHasPosterChange}
    />
  );
};

PosterContainer.propTypes = {
  shareState: shareCardStateType.isRequired,
  onSetShareState: PropTypes.func.isRequired,
};

export default PosterContainer;
