import React, { Fragment, useState, useEffect } from 'react';
import PropTypes, { shape } from 'prop-types';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import FullHeader from './FullHeader';
import './AppHeader.scss';

const AppHeader = ({ location }) => {
  const [isFullHeader, setIsFullHeader] = useState(false);

  // Header class; hidden if full header
  const headerStyleName = classNames('header', {
    'header--hidden': isFullHeader,
  });

  // On path change, set header type
  useEffect(() => {
    setIsFullHeader(location.pathname === '/');
  }, [location.pathname]);

  return (
    <Fragment>
      <header styleName={headerStyleName}>
        Normal header
      </header>
      {(isFullHeader
        ? <FullHeader />
        : <div styleName="header__spacer" />
      )}
    </Fragment>
  );
};

AppHeader.propTypes = {
  location: shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(props => <AppHeader {...props} />);
