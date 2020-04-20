import React from 'react';
import PropTypes, { shape } from 'prop-types';
import quoteType from 'types/quote';
import BgCover from 'components/shared/BgCover';
import TwitterButton from 'components/shared/TwitterButton';
import ATFDateTime from 'components/shared/ATFDateTime';
import ShareInviteButton from 'components/shared/ShareInviteButton';
import BigQuote from 'components/shared/BigQuote';
import BigCountdown from './BigCountdown';
import './GetReadyView.scss';

const GetReadyView = (props) => {
  const { followUrl, nextEvent, featuredQuote, quoteCoverUrl } = props;

  const header = (
    <div styleName="header">
      <div styleName="header__left">
        <TwitterButton href={followUrl} startIcon="plus">
          Follow @Clap2020
        </TwitterButton>
      </div>
      <div styleName="header__center">
        <ATFDateTime event={nextEvent} />
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

GetReadyView.propTypes = {
  followUrl: PropTypes.string.isRequired,
  nextEvent: shape({
    day: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
  featuredQuote: quoteType.isRequired,
  quoteCoverUrl: PropTypes.string.isRequired,
};

export default GetReadyView;
