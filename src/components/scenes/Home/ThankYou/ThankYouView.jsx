import React from 'react';
import FaIcon from 'components/shared/FaIcon';
import './ThankYouView.scss';

const ThankYouView = () => (
  <div styleName="thanks">
    <div styleName="thanks__header-wrap">
      <div styleName="thanks__header-border">
        <div styleName="thanks__header">
          <div styleName="thanks__header-hashtag">
            <FaIcon icon="hashtag" />
          </div>
          <div styleName="thanks__header-title">Thank you</div>
        </div>
      </div>
    </div>
  </div>
);

export default ThankYouView;
