import React from 'react';
import PropTypes from 'prop-types';
import './FBGroupPlugin.scss';

const FBGroupPlugin = ({ width }) => {
  const pageUrl = 'https://www.facebook.com/groups/clap2020/';

  return (
    <div styleName="frame">
      <div
        className="fb-group"
        data-href={pageUrl}
        data-width={width}
        data-show-social-context="false"
        data-show-metadata="false"
      >
        <blockquote cite={pageUrl} className="fb-xfbml-parse-ignore">
          <a href={pageUrl}>Clap2020</a>
        </blockquote>
      </div>
    </div>
  );
};

FBGroupPlugin.propTypes = {
  width: PropTypes.number,
};

FBGroupPlugin.defaultProps = {
  width: 340,
};

export default FBGroupPlugin;
