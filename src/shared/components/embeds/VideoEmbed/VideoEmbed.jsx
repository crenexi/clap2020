import React from 'react';
import videoEmbedType from 'types/video-embed-type';
import FaIcon from 'components/ui/FaIcon';
import './VideoEmbed.scss';

const VideoEmbed = ({ video }) => {
  const { videoId, title, attribution, location } = video;
  const src = `https://www.youtube.com/embed/${videoId}`;

  const iframe = (
    <iframe
      styleName="iframe"
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
      <header styleName="header">
        <div styleName="icon"><FaIcon icon="video" /></div>
        <div styleName="header__content">
          <h5 styleName="header__title">{title}</h5>
          <div styleName="header__details">
            {location} | By {attribution}
          </div>
        </div>
      </header>
      <div styleName="iframe-wrap">{iframe}</div>
    </article>
  );
};

VideoEmbed.propTypes = {
  video: videoEmbedType.isRequired,
};

export default VideoEmbed;
