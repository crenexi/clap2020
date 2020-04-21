import React from 'react';
import PropTypes from 'prop-types';
import reactRefType from 'types/react-ref-type';
import Loading from 'components/ui/Loading';
import ErrorText from 'components/ui/ErrorText';
import TWPlugin from '../TWPlugin';

const TWTweet = (props) => {
  const { frameRef, loading, error, onReady } = props;

  return (
    <TWPlugin onReady={onReady}>
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
  frameRef: reactRefType.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  onReady: PropTypes.func.isRequired,
};

export default TWTweet;
