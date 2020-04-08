import React from 'react';
import workforceBucketType from 'types/workforce-bucket';
import ThankYouHeading from '../ThankYouHeading';
import Bucket from './Bucket';
import FrontLineGroup from './FrontLineGroup';
import ResponseGroup from './ResponseGroup';
import EssentialGroup from './EssentialGroup';
import './ThankYouView.scss';

const ThankYouView = (props) => {
  const { frontLineBucket, responseBucket, essentialBucket } = props;

  const frontLineGroups = (
    <div styleName="thanks__front-line-grid">
      {frontLineBucket.groups.map(group => (
        <FrontLineGroup key={group.name} group={group} />
      ))}
    </div>
  );

  const responseGroups = (
    <div styleName="thanks__response-grid">
      <div styleName="thanks__response-grid__card">
        {responseBucket.groups.map(group => (
          <ResponseGroup key={group.name} group={group} />
        ))}
      </div>
    </div>
  );

  const essentialGroups = (
    <div styleName="thanks__essential-grid">
      <div styleName="thanks__essential-grid__card">
        {essentialBucket.groups.map(group => (
          <EssentialGroup key={group.name} group={group} />
        ))}
      </div>
    </div>
  );

  return (
    <div styleName="thanks">
      <ThankYouHeading />
      <div styleName="thanks__main">
        <Bucket bucket={frontLineBucket}>{frontLineGroups}</Bucket>
        <Bucket bucket={responseBucket}>{responseGroups}</Bucket>
        <Bucket bucket={essentialBucket}>{essentialGroups}</Bucket>
      </div>
    </div>
  );
};

ThankYouView.propTypes = {
  frontLineBucket: workforceBucketType.isRequired,
  responseBucket: workforceBucketType.isRequired,
  essentialBucket: workforceBucketType.isRequired,
};

export default ThankYouView;
