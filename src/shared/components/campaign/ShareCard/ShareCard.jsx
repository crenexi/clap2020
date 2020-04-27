import React from 'react';
import PropTypes from 'prop-types';
import * as Scroll from 'react-scroll';
import Main from './Main';
import './ShareCard.scss';

const ShareCard = ({ overline }) => {
  const ScrollElement = Scroll.Element;

  return (
    <ScrollElement styleName="frame" name="shareCard">
      <div styleName="card">
        <div styleName="overline">{overline}</div>
        <Main />
      </div>
    </ScrollElement>
  );
};

ShareCard.propTypes = {
  overline: PropTypes.string.isRequired,
};

export default ShareCard;
