import React from 'react';
import PropTypes from 'prop-types';
import shareSectionType from '@types/share-section-type';
import { CopyCard } from '@components/ui';
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

  return (
    <div styleName="frame">
      <Hero
        url={heroCoverUrl}
        imagePosition="70% 55%"
        title="Spread"
        subtitle="the word, not the virus"
      />
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
      <div styleName="copy-countdown">
        <Section
          title={copyCountdown.title}
          brief={copyCountdown.brief}
          inverted
          narrow
        >
          <div styleName="clap-time">
            <span>Clap time is <strong>{timeUntil}</strong>!</span>
          </div>
        </Section>
      </div>
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
