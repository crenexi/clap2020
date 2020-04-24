import React from 'react';
import PropTypes from 'prop-types';
import shareSectionType from '@types/share-section-type';
import { Button, CopyCard } from '@components/ui';
import Hero from '../Hero';
import Section from '../Section';
import './Intro.scss';

const Intro = (props) => {
  const {
    heroCoverUrl,
    copySite,
    copyPoster,
    copyCountdown,
    timeUntil,
  } = props;

  const siteUrl = 'https://clap2020.com';
  const countdownUrl = `${siteUrl}/get-ready`;

  const hero = (
    <Hero
      url={heroCoverUrl}
      imagePosition="70% 55%"
      title="Spread"
      subtitle="the word, not the virus"
    />
  );

  const copySiteSection = (
    <div styleName="copy-site">
      <Section
        title={copySite.title}
        brief={copySite.brief}
        narrow
      >
        <CopyCard overline="Site URL" value={siteUrl}>
          <div styleName="copy-site__url">{siteUrl}</div>
        </CopyCard>
      </Section>
    </div>
  );

  const copyPosterSection = (
    <div styleName="copy-poster">
      <Section
        title={copyPoster.title}
        brief={copyPoster.brief}
        wide
      >
        <div styleName="footnote">
          <p>Remember to share with #Clap2020 #ClapBecauseWeCare hashtags!</p>
        </div>
      </Section>
    </div>
  );

  const copyCountdownSection = (
    <div styleName="copy-countdown">
      <Section
        title={copyCountdown.title}
        brief={copyCountdown.brief}
        inverted
        narrow
      >
        <CopyCard overline="Countdown URL" value={countdownUrl}>
          <div styleName="copy-countdown__url">{countdownUrl}</div>
        </CopyCard>
        <div styleName="copy-countdown__time">
          <span>Clap time is <strong>{timeUntil}</strong>!</span>
        </div>
        <div styleName="copy-countdown__invite">
          <Button variant="inverted" to="/get-ready">
            View Countdown
          </Button>
        </div>
      </Section>
    </div>
  );

  return (
    <div styleName="frame">
      {hero}
      {copySiteSection}
      {copyPosterSection}
      {copyCountdownSection}
    </div>
  );
};

Intro.propTypes = {
  heroCoverUrl: PropTypes.string.isRequired,
  copySite: shareSectionType.isRequired,
  copyPoster: shareSectionType.isRequired,
  copyCountdown: shareSectionType.isRequired,
  timeUntil: PropTypes.string.isRequired,
};

export default Intro;
