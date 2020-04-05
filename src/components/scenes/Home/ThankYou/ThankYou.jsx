import React from 'react';
import useContent from 'hooks/use-content';
import ThankYouView from './ThankYouView';

const ThankYou = () => {
  const { workforceGroups } = useContent();

  const bucketsSkeleton = {
    frontLines: [],
    respones: [],
    essential: [],
  };

  const buckets = workforceGroups.reduce((buckets, group) => {
    const bucketId = group.bucket;
    const bucket = [...(buckets[bucketId] || []), group];

    // Pass up if bucket is not in skeleton
    if (!(bucketId in buckets)) return buckets;

    // Return buckets with updated bucket
    return { ...buckets, [bucketId]: bucket };
  }, bucketsSkeleton);

  console.log(buckets);

  return (
    <div>test</div>
    // <ThankYouView
    //   frontLineGroups={frontLineGroups}
    //   responseGroups
    //   essentialGroups={essentialGroups}
    // />
  );
};

export default ThankYou;
