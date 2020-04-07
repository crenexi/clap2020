import React from 'react';
import PropTypes from 'prop-types';
import quoteType from 'types/quote';
import Countdown from 'components/shared/Countdown';
import BgCover from 'components/shared/BgCover';
import BigQuote from 'components/shared/BigQuote';
import './GetReadyView.scss';

const GetReadyView = (props) => {
  const { featuredQuote, quoteCoverUrl } = props;

  return (
    <article styleName="ready">
      <BgCover
        url={quoteCoverUrl}
        imagePosition="center center"
        blanketColor="rgba(5, 20, 52, .8)"
      >
        <section styleName="ready__countdown">
          <Countdown />
        </section>
        <aside styleName="ready__quote-frame">
          <div styleName="ready__quote">
            <BigQuote quote={featuredQuote} />
          </div>
        </aside>
      </BgCover>
    </article>
  );
};

GetReadyView.propTypes = {
  featuredQuote: quoteType.isRequired,
  quoteCoverUrl: PropTypes.string.isRequired,
};

export default GetReadyView;
