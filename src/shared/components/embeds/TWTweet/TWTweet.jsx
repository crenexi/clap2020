import React from 'react';
import PropTypes from 'prop-types';
import reactRefType from '@types/react-ref-type';
import { Loading, ErrorText } from '@components/ui';
import TWPlugin from '../TWPlugin';
import './TWTweet.scss';

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
