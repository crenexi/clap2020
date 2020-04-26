import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import shareCardStateType from '@types/share-card-state-type';
import shareCardActionsType from '@types/share-card-actions-type';
import './Main.scss';

const Main = (props) => {
  const { shareState, shareActions } = props;


  const posterSwitch = (
    <Switch
      checked={!!includePoster}
      onChange={onPosterToggle}
      name="includePoster"
    />
  );

  const currentOptions = (
    <div styleName="options__current">
      <div styleName="options__current-prop">
        {posterSelection.format}
      </div>
      <div styleName="options__current-prop">
        {posterSelection.quality}
      </div>
    </div>
  );

  const optionsToggle = (
    <MuiButtonBase
      style={{ width: '100%' }}
      onClick={onToggleOptions}
    >
      <div styleName="options__btn">
        <div styleName="options__btn-label">
          {showOptions ? 'Hide' : 'Change'}
        </div>
        <div styleName="options__btn-icon">
          <FaIcon icon={showOptions ? 'minus' : 'plus'} />
        </div>
      </div>
    </MuiButtonBase>
  );

  const optionsMain = (
    <div styleName="options__main">
      <PosterSelect
        selection={posterSelection}
        onChange={onPosterSelect}
      />
      <div styleName="options__close">
        {!isGtXs && (
          <Button endIcon="check-circle" click={onToggleOptions}>
            Looks Good
          </Button>
        )}
      </div>
    </div>
  );

  const options = (
    <div styleName="options">
      <h5 styleName="options__title">Poster URL</h5>
      {currentOptions}
      {optionsToggle}
      {showOptions && optionsMain}
    </div>
  );

  const main = (
    <div styleName="main">
      <div styleName="poster-switch">
        <FormControlLabel
          control={posterSwitch}
          label="Include Poster"
        />
      </div>
      {includePoster && options}
    </div>
  );

  const actions = (
    <div styleName="actions">
      <ShareButtons
        share={actions.onShare}
        copy={actions.onCopy}
      />
    </div>
  );

  return (
    <Fragment>
      {main}
      {actions}
    </Fragment>
  );
};

Main.propTypes = {
  shareState: shareCardStateType.isRequired,
  shareActions: shareCardActionsType.isRequired,
};

export default Main;
