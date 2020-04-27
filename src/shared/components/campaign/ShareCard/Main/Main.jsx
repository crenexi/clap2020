import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import shareCardStateType from '@types/share-card-state-type';
import { ShareButtons } from '@components/campaign';
import TagsText from './TagsText';
import Poster from './Poster';
import './Main.scss';

const Main = (props) => {
  const { shareState, onSetShareState, onShare, onCopy } = props;

  return (
    <Fragment>
      <div styleName="main">
        <TagsText
          shareState={shareState}
          onSetShareState={onSetShareState}
        />
        <Poster
          shareState={shareState}
          onSetShareState={onSetShareState}
        />
      </div>
      <div styleName="actions">
        <ShareButtons share={onShare} copy={onCopy} />
      </div>
    </Fragment>
  );
};

Main.propTypes = {
  shareState: shareCardStateType.isRequired,
  onSetShareState: PropTypes.func.isRequired,
  onShare: PropTypes.func.isRequired,
  onCopy: PropTypes.func.isRequired,
};

export default Main;
