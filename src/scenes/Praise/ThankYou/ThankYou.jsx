import React from 'react';
import workforceBucketType from '@types/workforce-bucket-type';
import { ThankYouHeading } from '@components/campaign';
import Bucket from './Bucket';
import FrontLineGroup from './FrontLineGroup';
import ResponseGroup from './ResponseGroup';
import EssentialGroup from './EssentialGroup';
import './ThankYou.scss';

const ThankYou = (props) => {
  const { frontLineBucket, responseBucket, essentialBucket } = props;

  const frontLineGroups = (
    <div styleName="front-line-grid">
      {frontLineBucket.groups.map(group => (
        <FrontLineGroup key={group.name} group={group} />
      ))}
    </div>
  );

  const responseGroups = (
    <div styleName="response-grid">
      <div styleName="response-grid__card">
        {responseBucket.groups.map(group => (
          <ResponseGroup key={group.name} group={group} />
        ))}
      </div>
    </div>
  );

  const essentialGroups = (
    <div styleName="essential-grid">
      <div styleName="essential-grid__card">
        {essentialBucket.groups.map(group => (
          <EssentialGroup key={group.name} group={group} />
        ))}
      </div>
    </div>
  );

  return (
    <div styleName="thanks">
      <ThankYouHeading />
      <div styleName="main">
        <Bucket bucket={frontLineBucket}>{frontLineGroups}</Bucket>
        <Bucket bucket={responseBucket}>{responseGroups}</Bucket>
        <Bucket bucket={essentialBucket}>{essentialGroups}</Bucket>
      </div>
    </div>
  );
};

ThankYou.propTypes = {
  frontLineBucket: workforceBucketType.isRequired,
  responseBucket: workforceBucketType.isRequired,
  essentialBucket: workforceBucketType.isRequired,
};

export default ThankYou;
