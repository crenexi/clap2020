import React from 'react';
import quoteType from '@types/quote-type';
import { BigQuote } from '@components/ui';
import './EndQuote.scss';

const EndQuote = ({ featuredQuote }) => (
  <div styleName="frame">
    <div styleName="main">
      <BigQuote quote={featuredQuote} />
    </div>
  </div>
);

EndQuote.propTypes = {
  featuredQuote: quoteType.isRequired,
};

export default EndQuote;
