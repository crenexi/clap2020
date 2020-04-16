import React from 'react';
import PropTypes from 'prop-types';
import FBPlugin from '../FBPlugin';

const FBGroupPlugin = ({ width }) => {
  const groupUrl = 'https://www.facebook.com/groups/clap2020/';

  return (
    <FBPlugin>
      <div
        className="fb-group"
        data-href={groupUrl}
        data-width={width}
        data-show-social-context="false"
        data-show-metadata="false"
      >
        <blockquote cite={groupUrl} className="fb-xfbml-parse-ignore">
          <a
            href={groupUrl}
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
