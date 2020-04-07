import React from 'react';
import PropTypes, { shape } from 'prop-types';
import BrandSocialNav from 'components/shared/BrandSocialNav';
import TwitterButton from 'components/shared/TwitterButton';
import './FollowUsView.scss';

const FollowUsView = (props) => {
  const { twitterIntents } = props;

  const join = (
    <div styleName="follow__section">
      <h5 styleName="follow__heading">Share in group</h5>
      <div styleName="follow__section-main">
        main
      </div>
    </div>
  );

  const twitter = (
    <div styleName="follow__section">
      <h5 styleName="follow__heading">Follow on Twitter</h5>
      <div styleName="follow__section-main">
        <TwitterButton href={twitterIntents.follow} startIcon="plus">
          Follow @Clap2020
        </TwitterButton>
      </div>
    </div>
  );

  const follow = (
    <div styleName="follow__section">
      <h5 styleName="follow__heading">View feeds</h5>
      <div styleName="follow__section-main">
        <BrandSocialNav />
      </div>
    </div>
  );

  return (
    <div styleName="follow">
      {join}
      {twitter}
      {follow}
    </div>
  );
};

FollowUsView.propTypes = {
  twitterIntents: shape({
    follow: PropTypes.string.isRequired,
  }).isRequired,
};

export default FollowUsView;
