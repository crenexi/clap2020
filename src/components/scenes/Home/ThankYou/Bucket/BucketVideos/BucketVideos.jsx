import React from 'react';
import { arrayOf } from 'prop-types';
import videoEmbedType from 'types/video-embed';
import VideoEmbed from 'components/shared/VideoEmbed';
import './BucketVideos.scss';

const BucketVideos = ({ videos }) => (
  <div styleName="videos">
    <h4 styleName="videos__title">Featured Videos</h4>
    <div styleName="videos__list">
      {videos.map(video => (
        <div styleName="video__item" key={video.videoId}>
          <VideoEmbed video={video} />
        </div>
      ))}
    </div>
  </div>
);

BucketVideos.propTypes = {
  videos: arrayOf(videoEmbedType).isRequired,
};

export default BucketVideos;
