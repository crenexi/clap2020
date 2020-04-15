import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loading from 'components/shared/Loading';
import './FBGroupPlugin.scss';

const FBGroupPlugin = ({ width }) => {
  const groupUrl = 'https://www.facebook.com/groups/clap2020/';

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!window.FB) {
      setIsLoading(false);
      return;
    }

    window.FB.Event.subscribe('xfbml.render', () => setIsLoading(false));
  }, []);

  return (
    <div styleName="frame">
      {isLoading && <Loading size="small" />}
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
