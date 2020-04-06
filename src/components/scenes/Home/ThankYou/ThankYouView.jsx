import React from 'react';
import workforceBucketType from 'types/workforce-bucket';
import ThankYouHeader from './ThankYouHeader';
import Bucket from './Bucket';
import FrontLineGroup from './FrontLineGroups';
import ResponseGroup from './ResponseGroups';
import EssentialGroup from './EssentialGroups';
import './ThankYouView.scss';

const ThankYouView = (props) => {
  const { frontLineBucket, responseBucket, essentialBucket } = props;

  const frontLineGroups = frontLineBucket.groups.map(group => (
    <FrontLineGroup key={group.name} group={group} />
  ));

  const responseGroups = responseBucket.groups.map(group => (
    <ResponseGroup key={group.name} group={group} />
  ));

  const essentialGroups = essentialBucket.groups.map(group => (
    <EssentialGroup key={group.name} group={group} />
  ));

  return (
    <div styleName="thanks">
      <ThankYouHeader />
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
