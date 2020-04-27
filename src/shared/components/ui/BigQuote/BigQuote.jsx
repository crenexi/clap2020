import React from 'react';
import PropTypes from 'prop-types';
import quoteType from '@types/quote-type';
import FaIcon from '../FaIcon';
import './BigQuote.scss';

const BigQuote = ({ quote, extraLarge }) => {
  const { text, author } = quote;
  const className = extraLarge ? 'quote quote--extra-large' : 'quote';

  return (
    <blockquote styleName={className}>
      <div styleName="quote__icon">
        <FaIcon icon="quote-left" />
      </div>
      <div styleName="quote__text">{text}</div>
      <div styleName="quote__icon quote__icon--right">
        <FaIcon icon="quote-right" />
      </div>
      <cite styleName="quote__cite">
        <div styleName="quote__name">{author.name}</div>
        <div styleName="quote__title">{author.title}</div>
      </cite>
    </blockquote>
  );
};

BigQuote.propTypes = {
  quote: quoteType.isRequired,
  extraLarge: PropTypes.bool,
};

BigQuote.defaultProps = {
  extraLarge: false,
};

export default BigQuote;
