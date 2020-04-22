import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Button, FaIcon } from '@components/ui';
import { ThankYouHeading } from '@components/campaign';
import './ThankYouInvite.scss';

const ThankYouInvite = () => {
  const { heroImageUrl, frontLineGroups } = useSelector(s => ({
    heroImageUrl: s.scenes.home.thankYouInvite.heroImageUrl,
    frontLineGroups: s.scenes.praise.workforceGroups
      .filter(g => g.bucket === 'frontLines'),
  }));

  // Styles
  const heroStyle = { backgroundImage: `url('${heroImageUrl}')` };

  // Front Lines icons
  const icons = frontLineGroups.map(({ icon }) => (
    <div styleName="icon" key={icon}>
      <FaIcon icon={icon} />
    </div>
  ));

  // Invitation button
  const inviteButton = (
    <Button
      to="praise"
      variant="primary"
      size="large"
      endIcon="arrow-circle-right"
    >
      Groups to thank
    </Button>
  );

  return (
    <Fragment>
      <ThankYouHeading />
      <div styleName="invite">
        <div styleName="hero" style={heroStyle} />
        <div styleName="main">
          <div styleName="icons">{icons}</div>
          <div styleName="btn">{inviteButton}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default ThankYouInvite;
