import React from 'react';
import PropTypes from 'prop-types';
import { Button, FaIcon } from '@components/ui';
import { BrandNav, TwitterButton } from '@components/brand';
import './FollowUs.scss';

const FollowUs = (props) => {
  const { fbGroupUrl, twFollowUrl } = props;

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
    <div styleName="section">
      <h5 styleName="heading">Share in group</h5>
      <div styleName="section-main">
        <div styleName="group-btn-context">
          <div styleName="group-icon">
            <FaIcon icon="users" />
          </div>
          {fbGroupButton}
        </div>
      </div>
    </div>
  );

  const twitter = (
    <div styleName="section">
      <h5 styleName="heading">Follow on Twitter</h5>
      <div styleName="section-main">
        <TwitterButton href={twFollowUrl} startIcon="plus">
          Follow @Clap2020
        </TwitterButton>
      </div>
    </div>
  );

  const follow = (
    <div styleName="section">
      <h5 styleName="heading">View feeds</h5>
      <div styleName="section-main">
        <BrandNav />
      </div>
    </div>
  );

  return (
    <div styleName="follow">
      <div styleName="main">
        {join}
        {twitter}
        {follow}
      </div>
    </div>
  );
};

FollowUs.propTypes = {
  fbGroupUrl: PropTypes.string.isRequired,
  twFollowUrl: PropTypes.string.isRequired,
};

export default FollowUs;
