import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import FBPlugin from '../FBPlugin';

const FBGroupPlugin = ({ width }) => {
  const url = useSelector(s => s.campaign.urls.fbGroup);

  return (
    <FBPlugin minHeight={95}>
      <div
        className="fb-group"
        data-href={url}
        data-width={width}
        data-show-social-context="false"
        data-show-metadata="false"
      >
        <blockquote cite={url} className="fb-xfbml-parse-ignore">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Clap2020 Group
          </a>
        </blockquote>
      </div>
    </FBPlugin>
  );
};

FBGroupPlugin.propTypes = {
  width: PropTypes.number,
};

FBGroupPlugin.defaultProps = {
  width: 340,
};

export default FBGroupPlugin;
