import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import HeaderFrame from '../HeaderFrame';
import './GlobalHeaderView.scss';

const GlobalHeaderView = ({ hidden }) => {
  const className = classNames('header-frame', {
    'header-frame--hidden': hidden,
  });

  return (
    <div styleName={className}>
      <HeaderFrame>
        <header styleName="header">
          Normal header
        </header>
      </HeaderFrame>
    </div>
  );
};

GlobalHeaderView.propTypes = {
  hidden: PropTypes.bool.isRequired,
};

export default GlobalHeaderView;
