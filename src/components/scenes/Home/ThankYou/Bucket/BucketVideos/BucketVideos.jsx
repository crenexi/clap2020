import React, { useState } from 'react';
import { arrayOf } from 'prop-types';
import videoEmbedType from 'types/video-embed';
import VideoEmbed from 'components/shared/VideoEmbed';
import Button from 'components/shared/Button';
import './BucketVideos.scss';

const BucketVideos = ({ videos }) => {
  const [hidden, setHidden] = useState(true);

  const listClass = (() => {
    const base = 'videos__list';
    return hidden ? `${base} ${base}--hidden` : base;
  })();

  const invite = (
    <div styleName="videos__invite">
      <Button
        variant="secondary"
        startIcon="chevron-down"
        click={() => setHidden(false)}
      >
        View Videos
      </Button>
    </div>
  );

  return (
    <div styleName="videos">
      <h4 styleName="videos__title">Featured Videos</h4>
      <div styleName={listClass}>
        {videos.map(video => (
          <div styleName="video__item" key={video.videoId}>
            <VideoEmbed video={video} />
          </div>
        ))}
      </div>
      {hidden && invite}
    </div>
  );
};

BucketVideos.propTypes = {
  videos: arrayOf(videoEmbedType).isRequired,
};

export default BucketVideos;
