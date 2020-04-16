import React from 'react';
import PropTypes from 'prop-types';
import FBPlugin from '../FBPlugin';
import './FBPagePlugin.scss';

const FBPagePlugin = ({ width, height, withEvents }) => {
  const pageUrl = 'https://www.facebook.com/clap2020nation/';
  const tabs = !withEvents ? '' : 'events';

  return (
    <FBPlugin>
      <div styleName="card">
        <div
          className="fb-page"
          data-href={pageUrl}
          data-tabs={tabs}
          data-width={width}
          data-height={height}
          data-small-header="false"
          data-adapt-container-width="false"
          data-hide-cover="false"
          data-show-facepile="false"
          data-hide-cta="true"
        >
          <blockquote cite={pageUrl} className="fb-xfbml-parse-ignore">
            <a
              href={pageUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Clap2020 Page
            </a>
          </blockquote>
        </div>
      </div>
    </FBPlugin>
  );
};

FBPagePlugin.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  withEvents: PropTypes.bool,
};

FBPagePlugin.defaultProps = {
  width: 340,
  height: 500,
  withEvents: false,
};

export default FBPagePlugin;
