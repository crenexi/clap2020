import React from 'react';
import { useSelector } from 'react-redux';
import logger from '@services/logger';
import ThankYou from './ThankYou';

const ThankYouContainer = () => {
  const { groups, videos } = useSelector(s => ({
    groups: s.scenes.praise.workforceGroups,
    videos: s.scenes.praise.workforceVideos,
  }));

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
  groups.forEach((group) => {
    const bucketId = group.bucket;

    // Ensure bucket is valid
    if (!(bucketId in buckets)) {
      logger.error(`Bucket ${bucketId} not found for group ${group.name}`);
      return;
    }

    buckets[bucketId].groups.push(group);
  });

  // Populate buckets with videos
  videos.filter(v => v.isFeatured).forEach((video) => {
    const bucketId = video.bucket;

    // Ensure bucket is valid
    if (!(bucketId in buckets)) {
      logger.error(`Bucket ${bucketId} not found for video ${video.title}`);
      return;
    }

    buckets[bucketId].videos.push(video);
  });

  return (
    <ThankYou
      frontLineBucket={buckets.frontLines}
      responseBucket={buckets.response}
      essentialBucket={buckets.essential}
    />
  );
};

export default ThankYouContainer;
