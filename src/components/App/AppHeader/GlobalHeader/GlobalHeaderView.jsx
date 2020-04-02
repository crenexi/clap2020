import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import HeaderFrame from '../HeaderFrame';
import './GlobalHeaderView.scss';

const GlobalHeaderView = ({ hidden }) => {
  const className = classNames('header', {
    'header--hidden': hidden,
  });

  return (
    <header styleName={className}>
      <HeaderFrame>
        Normal header
      </HeaderFrame>
    </header>
  );
};

GlobalHeaderView.propTypes = {
  hidden: PropTypes.bool.isRequired,
};

export default GlobalHeaderView;
