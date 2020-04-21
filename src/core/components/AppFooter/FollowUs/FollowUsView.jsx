import React from 'react';
import PropTypes, { shape } from 'prop-types';
import Button from '@components/shared/Button';
import TwitterButton from '@components/shared/TwitterButton';
import BrandSocialNav from '@components/shared/BrandSocialNav';
import FaIcon from '@components/shared/FaIcon';
import './FollowUsView.scss';

const FollowUsView = (props) => {
  const { twitterIntents, fbGroupUrl } = props;

  const fbGroupButton = (
    <Button
      variant="white"
      size="large"
      href={fbGroupUrl}
      target="_blank"
    >
      Facebook Group
    </Button>
  );

  const join = (
    <div styleName="follow__section">
      <h5 styleName="follow__heading">Share in group</h5>
      <div styleName="follow__section-main">
        <div styleName="follow__group-btn-context">
          <div styleName="follow__group-icon">
            <FaIcon icon="users" />
          </div>
          {fbGroupButton}
        </div>
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
      <div styleName="follow__main">
        {join}
        {twitter}
        {follow}
      </div>
    </div>
  );
};

FollowUsView.propTypes = {
  twitterIntents: shape({
    follow: PropTypes.string.isRequired,
  }).isRequired,
  fbGroupUrl: PropTypes.string.isRequired,
};

export default FollowUsView;
