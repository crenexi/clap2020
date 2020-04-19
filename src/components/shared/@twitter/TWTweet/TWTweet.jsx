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
  const [error, setError] = useState(false);

  // Error handler
  const handleLoadErr = (err) => {
    logger.error(err, `Failed to load tweet '${id}'`);
    setError(true);
    setIsLoading(false);
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
      setError(true);
      setIsLoading(false);
      return;
    }

    // Create the tweet
    console.log(frameRef.current);
    window.twttr.widgets.createTweet(id, frameRef.current, params)
      .then(() => setIsLoading(false))
      .catch(handleLoadErr);
  };

  return (
    <TWPlugin>
      {isLoading && <Loading size="small" />}
      {error && <ErrorText subtle>Error loading tweet</ErrorText>}
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
