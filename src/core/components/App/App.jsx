import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { BrowserRouter as Router } from 'react-router-dom';
import { Loading } from '@components/ui';
// import AppHeader from '../AppHeader';
// import AppMain from '../AppMain';
import AppFooter from '../AppFooter';
// import ShareModal from '../ShareModal';
import ScrollToTop from '../ScrollToTop';
import './App.scss';

const AppView = ({ isLoading }) => {
  const className = classNames('app', {
    'app--loading': isLoading,
  });

  const appLoading = (
    <div styleName="app-loading">
      <div styleName="app-loading__center">
        <Loading size="large" withStar />
      </div>
    </div>
  );

  return (
    <Router>
      <ScrollToTop />
      {isLoading && appLoading}
      <div styleName={className}>
        {/* <AppHeader /> */}
        {/* <AppMain /> */}
        <AppFooter />
        {/* <ShareModal /> */}
      </div>
    </Router>
  );
};

AppView.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default AppView;
