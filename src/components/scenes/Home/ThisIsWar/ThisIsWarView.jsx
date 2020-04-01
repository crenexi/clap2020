import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import BgCover from 'components/shared/BgCover';
import './ThisIsWarView.scss';

const ThisIsWarView = ({ coverUrl, warConditions, quotes }) => {
  const theme = useTheme();
  const isGtSm = useMediaQuery(theme.breakpoints.up('md'));

  const warConditions = [];

  const warContentSecondary = (
    <div styleName="war__bottom">
      Bottom content
    </div>
  );

  return (
    <div styleName="war">
      <div styleName="war__cover-frame">
        <BgCover
          url={coverUrl}
          imagePosition="left top"
          blanketColor="rgba(8, 36, 94, .5)"
        >
          <div styleName="war__cover-content">
            <div styleName="war__top">
              <div styleName="war__heading">This is</div>
              <div styleName="war__heading war__heading--bold">War</div>
            </div>
            {isGtSm && warContentSecondary}
          </div>
        </BgCover>
      </div>
      {!isGtSm && warContentSecondary}
    </div>
  );
};

ThisIsWarView.propTypes = {
  coverUrl: PropTypes.string.isRequired,
};

export default ThisIsWarView;
