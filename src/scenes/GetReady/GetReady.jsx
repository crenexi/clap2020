import React from 'react';
import PropTypes, { shape } from 'prop-types';
import quoteType from '@types/quote-type';
import { BgCover, BigQuote } from '@components/ui';
import { TwitterButton } from '@components/brand';
import { ClapTime, ShareInviteButton } from '@components/campaign';
import BigCountdown from './BigCountdown';
import './GetReady.scss';

const GetReady = (props) => {
  const { followUrl, nextEvent, featuredQuote, quoteCoverUrl } = props;

  const header = (
    <div styleName="header">
      <div styleName="header__left">
        <TwitterButton href={followUrl} startIcon="plus">
          Follow @Clap2020
        </TwitterButton>
      </div>
      <div styleName="header__center">
        <ClapTime event={nextEvent} />
      </div>
      <div styleName="header__right">
        <ShareInviteButton label="Share" />
      </div>
    </div>
  );

  const countdown = (
    <div styleName="ready__countdown">
      <BigCountdown />
    </div>
  );

  const quote = (
    <aside styleName="ready__quote-frame">
      <div styleName="ready__quote">
        <BigQuote quote={featuredQuote} />
      </div>
    </aside>
  );

  return (
    <article styleName="ready">
      <section>
        <BgCover
          url={quoteCoverUrl}
          imagePosition="center center"
          blanketColor="rgba(5, 20, 52, .8)"
        >
          {header}
          {countdown}
          {quote}
        </BgCover>
      </section>
    </article>
  );
};

GetReady.propTypes = {
  followUrl: PropTypes.string.isRequired,
  nextEvent: shape({
    day: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
  featuredQuote: quoteType.isRequired,
  quoteCoverUrl: PropTypes.string.isRequired,
};

export default GetReady;
