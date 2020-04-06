import React from 'react';
import videoEmbedType from 'types/video-embed';
import FaIcon from 'components/shared/FaIcon';
import './VideoEmbed.scss';

const VideoEmbed = ({ video }) => {
  // const { videoId, title, attribution, location } = video;
  const { videoId, title } = video;
  const src = `https://www.youtube.com/embed/${videoId}`;

  return (
    <article styleName="video ">
      <header styleName="video__header">
        <div styleName="video__icon"><FaIcon icon="video" /></div>
        <h5>{title}</h5>
      </header>
      <div styleName="video__iframe-wrap">
        <iframe
          styleName="video__iframe"
          src={src}
          frameBorder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          rel="0"
          title={title}
        />
      </div>
    </article>
  );
};

VideoEmbed.propTypes = {
  video: videoEmbedType.isRequired,
};

export default VideoEmbed;
