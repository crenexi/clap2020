import React from 'react';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import shareCardStateType from '@types/share-card-state-type';
import Options from './Options';
import './Poster.scss';

const Poster = (props) => {
  const { shareState, onSetShareState, onHasPosterChange } = props;
  const { hasPoster, poster } = shareState;

  const hasPosterSwitch = (
    <FormControlLabel
      label="Include Poster"
      control={(
        <Switch
          checked={hasPoster}
          onChange={onHasPosterChange}
          name="hasPoster"
        />
      )}
    />
  );

  return (
    <div styleName="frame">
      <div styleName="switch">{hasPosterSwitch}</div>
      {hasPoster && (
        <div styleName="main">
          <h5 styleName="title">Poster URL</h5>
          <div styleName="current">
            <div styleName="current__prop">{poster.format}</div>
            <div styleName="current__prop">{poster.quality}</div>
          </div>
          <Options
            shareState={shareState}
            onSetShareState={onSetShareState}
          />
        </div>
      )}
    </div>
  );
};

Poster.propTypes = {
  shareState: shareCardStateType.isRequired,
  onSetShareState: PropTypes.func.isRequired,
  onHasPosterChange: PropTypes.func.isRequired,
};

export default Poster;
