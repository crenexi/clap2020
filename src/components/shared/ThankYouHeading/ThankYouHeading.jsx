import React from 'react';
import FaIcon from 'components/shared/FaIcon';
import './ThankYouHeading.scss';

const ThankYouHeading = () => (
  <div styleName="heading-wrap">
    <div styleName="heading-border">
      <div styleName="heading">
        <div styleName="heading__content">
          <div styleName="heading__hashtag">
            <FaIcon icon="hashtag" />
          </div>
          <div styleName="heading__title">Thank you</div>
        </div>
      </div>
    </div>
  </div>
);

export default ThankYouHeading;
