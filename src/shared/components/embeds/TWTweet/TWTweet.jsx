import React, { useRef, useState, useEffect } from 'react';
import PropTypes, { shape } from 'prop-types';
import logger from 'services/logger';
import Loading from 'components/shared/Loading';
import ErrorText from 'components/shared/ErrorText';
import TWPlugin from '../TWPlugin';
import './TWTweet.scss';

const TWTweet = ({ id, options }) => {
  const { hideConversation, hideCards } = options;
  const frameRef = useRef(null);

  // State
  const [twitterReady, setTwitterReady] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Error handler
  const handleLoadErr = (err) => {
    logger.error(err, `Failed to load tweet '${id}'`);
    setError(true);
    setLoading(false);
  };

  // Load the tweet
  const loadTweet = () => {
    const params = {
      conversation: hideConversation ? 'none' : undefined,
      cards: hideCards ? 'hidden' : undefined,
      theme: 'light',
      dnt: 'true',
    };

    if (!window.twttr) {
      logger.error(`'window.twttr' does not exist`);
      setError(true);
      setLoading(false);
      return;
    }

    // Create the tweet
    window.twttr.widgets.createTweet(id, frameRef.current, params)
      .then(() => setLoading(false))
      .catch(handleLoadErr);
  };

  // When twitter is ready, load the tweet
  useEffect(() => {
    if (twitterReady) loadTweet();
  }, [twitterReady]);

  // Twitter is ready
  const handleReady = () => setTwitterReady(true);

  return (
    <TWPlugin onReady={handleReady}>
      <div styleName="tweet-frame">
        {loading && <Loading size="small" />}
        {error && <ErrorText subtle>Error loading tweet</ErrorText>}
        <div styleName="tweet-card">
          <div styleName="tweet" ref={frameRef} />
        </div>
      </div>
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
