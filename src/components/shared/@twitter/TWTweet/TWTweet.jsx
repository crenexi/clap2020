import React, { useRef, useState, useEffect } from 'react';
import PropTypes, { shape } from 'prop-types';
import useBreakpoint from 'hooks/use-breakpoint';
import logger from 'services/logger';
import Loading from 'components/shared/Loading';
import ErrorText from 'components/shared/ErrorText';
import TWPlugin from '../TWPlugin';
import './TWTweet.scss';

const TWTweet = ({ id, options }) => {
  const { hideConversation, hideCards } = options;
  const frameRef = useRef(null);

  // Breakpoints
  const isGtXs = useBreakpoint('gt-xs');
  const isGtMd = useBreakpoint('gt-md');

  // Responsive width
  const width = (() => {
    if (!isGtXs) return 250;
    if (!isGtMd) return 400;
    return 550;
  });

  // State
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Error handler
  const handleLoadErr = () => {
    logger.error(`Failed to load tweet '${id}'`);
    setHasError(true);
    setIsLoading(true);
  };

  // Load the tweet
  const loadTweet = () => {
    const params = {
      width,
      conversation: hideConversation ? 'none' : undefined,
      cards: hideCards ? 'hidden' : undefined,
      theme: 'light',
      dnt: 'true',
    };

    if (!window.twttr) {
      logger.error(`'window.twttr' does not exist`);
      setHasError(true);
      setIsLoading(false);
      return;
    }

    // Create the tweet
    window.twttr.widgets.createTweet(id, frameRef, params)
      .then(() => setIsLoading(false))
      .then(handleLoadErr);
  };

  // On load, trigger the tweet load
  useEffect(loadTweet, []);

  return (
    <TWPlugin>
      {isLoading && <Loading />}
      {hasError && <ErrorText subtle>Error loading tweet</ErrorText>}
      <div styleName="frame" ref={frameRef} />
    </TWPlugin>
  );
};

TWTweet.propTypes = {
  id: PropTypes.string.isRequired,
  options: shape({
    hideConversation: PropTypes.bool,
    hideCards: PropTypes.bool,
  }),
};

TWTweet.defaultProps = {
  options: {
    conversation: true,
    hideCards: false,
  },
};

export default TWTweet;
