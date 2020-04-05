import React from 'react';
import FaIcon from 'components/shared/FaIcon';
import './ThankYouHeader.scss';

const ThankYouHeader = () => (
  <div styleName="header-wrap">
    <div styleName="header-border">
      <div styleName="header">
        <div styleName="header__hashtag">
          <FaIcon icon="hashtag" />
        </div>
        <div styleName="header__title">Thank you</div>
      </div>
    </div>
  </div>
);

export default ThankYouHeader;
