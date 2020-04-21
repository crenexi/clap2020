import React, { Fragment } from 'react';
import useContent from '@hooks/use-content';
import ThankYouHeading from '@components/shared/ThankYouHeading';
import FaIcon from '@components/shared/FaIcon';
import Button from '@components/shared/Button';
import './ThankYouInvite.scss';

const ThankYouInvite = () => {
  const { sceneContent } = useContent();

  // Content
  const { heroImageUrl } = sceneContent.home.thankYouInvite;
  const { workforceGroups } = sceneContent.praise;

  // Styles
  const heroStyle = { backgroundImage: `url('${heroImageUrl}')` };

  // Front Lines icons
  const icons = workforceGroups
    .filter(g => g.bucket === 'frontLines')
    .map(({ icon }) => (
      <div styleName="invite__icon" key={icon}>
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
        <div styleName="invite__hero" style={heroStyle} />
        <div styleName="invite__main">
          <div styleName="invite__icons">{icons}</div>
          <div styleName="invite__btn">{inviteButton}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default ThankYouInvite;
