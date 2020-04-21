import React from 'react';
import { FaIcon } from '@components/ui';
import './ThankYouHeading.scss';

const ThankYouHeading = () => (
  <div styleName="heading-wrap">
    <div styleName="heading-border">
      <div styleName="heading">
        <div styleName="content">
          <div styleName="hashtag">
            <FaIcon icon="hashtag" />
          </div>
          <div styleName="title">Thank you</div>
        </div>
      </div>
    </div>
  </div>
);

export default ThankYouHeading;
