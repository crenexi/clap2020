import React from 'react';
import PropTypes from 'prop-types';

const FBPagePlugin = ({ width, height, withEvents }) => {
  const pageUrl = 'https://www.facebook.com/clap2020nation/';
  const tabs = !withEvents ? '' : 'events';

  return (
    <div
      className="fb-page"
      data-href={pageUrl}
      data-tabs={tabs}
      data-width={width}
      data-height={height}
      data-small-header="false"
      data-adapt-container-width={!width}
      data-hide-cover="false"
      data-show-facepile="false"
    >
      <blockquote cite={pageUrl} className="fb-xfbml-parse-ignore">
        <a href={pageUrl}>Clap2020</a>
      </blockquote>
    </div>
  );
};

FBPagePlugin.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  withEvents: PropTypes.bool,
};

FBPagePlugin.defaultProps = {
  width: 0,
  height: 0,
  withEvents: false,
};

export default FBPagePlugin;
