import React from 'react';
import { arrayOf } from 'prop-types';
import videoEmbedType from 'types/video-embed';
import VideoEmbed from 'components/shared/VideoEmbed';
import './BucketVideos.scss';

const BucketVideos = ({ videos }) => (
  <div styleName="videos">
    {videos.map(video => (
      <div styleName="video__item" key={video.videoId}>
        <VideoEmbed video={video} />
      </div>
    ))}
  </div>
);

BucketVideos.propTypes = {
  videos: arrayOf(videoEmbedType).isRequired,
};

export default BucketVideos;
