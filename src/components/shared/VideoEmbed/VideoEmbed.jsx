import React from 'react';
import videoEmbedType from 'types/video-embed';
import FaIcon from 'components/shared/FaIcon';
import './VideoEmbed.scss';

const VideoEmbed = ({ video }) => {
  const { videoId, title, attribution, location } = video;
  const src = `https://www.youtube.com/embed/${videoId}`;

  const iframe = (
    <iframe
      styleName="video__iframe"
      src={src}
      frameBorder="0"
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      rel="0"
      title={title}
    />
  );

  return (
    <article styleName="video">
      <header styleName="video__header">
        <div styleName="video__icon"><FaIcon icon="video" /></div>
        <div styleName="video__header-content">
          <h5 styleName="video__header-title">{title}</h5>
          <div styleName="video__header-details">
            {location} | By {attribution}
          </div>
        </div>
      </header>
      <div styleName="video__iframe-wrap">{iframe}</div>
    </article>
  );
};

VideoEmbed.propTypes = {
  video: videoEmbedType.isRequired,
};

export default VideoEmbed;
