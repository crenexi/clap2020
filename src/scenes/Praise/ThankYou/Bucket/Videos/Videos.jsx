import React, { useState } from 'react';
import { arrayOf } from 'prop-types';
import videoEmbedType from '@types/video-embed-type';
import { Button } from '@components/ui';
import { VideoEmbed } from '@components/embeds';
import './Videos.scss';

const Videos = ({ videos }) => {
  const [hidden, setHidden] = useState(true);

  const listClass = (() => {
    const base = 'list';
    return hidden ? `${base} ${base}--hidden` : base;
  })();

  const invite = (
    <div styleName="invite">
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
      <h4 styleName="title">Featured Videos</h4>
      <div styleName={listClass}>
        {videos.map(video => (
          <div styleName="video" key={video.videoId}>
            <VideoEmbed video={video} />
          </div>
        ))}
      </div>
      {hidden && invite}
    </div>
  );
};

Videos.propTypes = {
  videos: arrayOf(videoEmbedType).isRequired,
};

export default Videos;
