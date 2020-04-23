import React from 'react';
import PropTypes from 'prop-types';
import workforceBucketType from '@types/workforce-bucket-type';
import BucketHeader from './Header';
import BucketMain from './Main';
import BucketVideos from './Videos';
import './Bucket.scss';

const Bucket = ({ children, bucket }) => {
  const { preTitle, title, videos } = bucket;

  return (
    <div styleName="bucket">
      <BucketHeader preTitle={preTitle} title={title} />
      <BucketMain>
        {children}
        {videos.length && <BucketVideos videos={videos} />}
      </BucketMain>
    </div>
  );
};

Bucket.propTypes = {
  children: PropTypes.node.isRequired,
  bucket: workforceBucketType.isRequired,
};

export default Bucket;
