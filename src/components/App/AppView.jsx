import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Loading from 'components/shared/Loading';
import AppMain from './AppMain';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import './AppView.scss';

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
    <Fragment>
      {isLoading && appLoading}
      <div styleName={className}>
        <AppHeader />
        <AppMain />
        <AppFooter />
      </div>
    </Fragment>
  );
};

AppView.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default AppView;
