import React from 'react';
import PropTypes from 'prop-types';
import BgCover from 'components/shared/BgCover';
import './ThisIsWarView.scss';

const ThisIsWarView = ({ coverUrl }) => (
  <div styleName="war">
    <BgCover
      url={coverUrl}
      imagePosition="left top"
      blanketColor="rgba(8, 36, 94, .5)"
    >
      This is war
    </BgCover>
  </div>
);

ThisIsWarView.propTypes = {
  coverUrl: PropTypes.string.isRequired,
};

export default ThisIsWarView;
