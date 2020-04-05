import React from 'react';
import logger from 'services/logger';
import useContent from 'hooks/use-content';
import ThankYouView from './ThankYouView';

const ThankYou = () => {
  const { workforceGroups } = useContent();

  const bucketsSkeleton = {
    frontLines: [],
    response: [],
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

  // Ensure all three buckets have data
  if (!buckets
    || !buckets.frontLines.length
    || !buckets.response.length
    || !buckets.essential.length
  ) {
    logger.error('Workforce groups data invalid');
    return null;
  }

  return (
    <ThankYouView
      frontLineGroups={buckets.frontLines}
      responseGroups={buckets.response}
      essentialGroups={buckets.essential}
    />
  );
};

export default ThankYou;
