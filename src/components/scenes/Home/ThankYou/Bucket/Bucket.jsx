import React from 'react';
import PropTypes from 'prop-types';
import workforceBucketType from 'types/workforce-bucket';
import BucketHeader from './BucketHeader';
import BucketMain from './BucketMain';
import './Bucket.scss';

const Bucket = ({ children, bucket }) => {
  const { preTitle, title, videos } = bucket;

  return (
    <div styleName="groups">
      <BucketHeader preTitle={preTitle} title={title} />
      <BucketMain>{children}
      </BucketMain>
    </div>
  );
};

Bucket.propTypes = {
  children: PropTypes.node.isRequired,
  bucket: workforceBucketType.isRequired,
};

export default Bucket;
