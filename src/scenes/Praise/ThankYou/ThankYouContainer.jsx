import React from 'react';
import logger from '@services/logger';
import useContent from '@hooks/use-content';
import ThankYouView from './ThankYouView';

const ThankYou = () => {
  const { sceneContent } = useContent();

  // Content
  const { workforceGroups, workforceVideos } = sceneContent.praise;

  // Static bucket content
  const buckets = {
    frontLines: {
      preTitle: '#ThankYou for battling the',
      title: 'Front Lines',
      groups: [],
      videos: [],
    },
    response: {
      preTitle: '#ThankYou for mobilizing',
      title: 'Crisis Response',
      groups: [],
      videos: [],
    },
    essential: {
      preTitle: '#ThankYou for handling',
      title: 'Essential Work',
      groups: [],
      videos: [],
    },
  };

  // Populate buckets with groups
  workforceGroups.forEach((group) => {
    const bucketId = group.bucket;

    // Ensure bucket is valid
    if (!(bucketId in buckets)) {
      logger.error(`Bucket ${bucketId} not found for group ${group.name}`);
      return;
    }

    buckets[bucketId].groups.push(group);
  });

  // Populate buckets with videos
  workforceVideos.filter(v => v.isFeatured).forEach((video) => {
    const bucketId = video.bucket;

    // Ensure bucket is valid
    if (!(bucketId in buckets)) {
      logger.error(`Bucket ${bucketId} not found for video ${video.title}`);
      return;
    }

    buckets[bucketId].videos.push(video);
  });

  return (
    <ThankYouView
      frontLineBucket={buckets.frontLines}
      responseBucket={buckets.response}
      essentialBucket={buckets.essential}
    />
  );
};

export default ThankYou;
