import React from 'react';
import videoEmbedType from 'types/video-embed';
import './VideoEmbed.scss';

const VideoEmbed = ({ video }) => {
  // const { title, src, attribution, location } = video;
  const { title } = video;

  return (
    <div styleName="video ">
      Video: {title}
    </div>
  );
};

VideoEmbed.propTypes = {
  video: videoEmbedType.isRequired,
};

export default VideoEmbed;
