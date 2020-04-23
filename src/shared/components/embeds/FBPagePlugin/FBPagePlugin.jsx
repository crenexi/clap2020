import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import FBPlugin from '../FBPlugin';
import './FBPagePlugin.scss';

const FBPagePlugin = ({ width, height }) => {
  const url = useSelector(s => s.campaign.urls.fbPage);

  return (
    <FBPlugin minHeight={130}>
      <div styleName="card">
        <div
          className="fb-page"
          data-href={url}
          data-width={width}
          data-height={height}
          data-small-header="false"
          data-adapt-container-width="false"
          data-hide-cover="false"
          data-show-facepile="false"
          data-hide-cta="true"
        >
          <blockquote cite={url} className="fb-xfbml-parse-ignore">
            <a
              href={url}
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
};

FBPagePlugin.defaultProps = {
  width: 340,
  height: 500,
};

export default FBPagePlugin;
