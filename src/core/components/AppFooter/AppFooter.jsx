import React, { Fragment } from 'react';
import classNames from 'classnames';
import PropTypes, { arrayOf } from 'prop-types';
import footerNavItemType from '@types/footer-nav-item-type';
import { BrandLogo } from '@components/brand';
import FollowUs from './FollowUs';
import Nav from './Nav';
import Legal from './Legal';
import './AppFooter.scss';

const AppFooter = (props) => {
  const { clapTime, metaNav, covid19Nav, extraSpacer } = props;

  const footerStyleName = classNames('footer', {
    'footer--extra-space': extraSpacer,
  });

  return (
    <Fragment>
      <FollowUs />
      <footer styleName={footerStyleName}>
        <div styleName="main">
          <div styleName="main__brand-frame">
            <div styleName="main__brand">
              <BrandLogo variant="white" />
            </div>
            <div styleName="main__clap-time">{clapTime}</div>
          </div>
          <div styleName="main__nav">
            <Nav metaNav={metaNav} covid19Nav={covid19Nav} />
          </div>
        </div>
        <Legal />
      </footer>
    </Fragment>
  );
};

AppFooter.propTypes = {
  clapTime: PropTypes.string.isRequired,
  metaNav: arrayOf(footerNavItemType).isRequired,
  covid19Nav: arrayOf(footerNavItemType).isRequired,
  extraSpacer: PropTypes.bool.isRequired,
};

export default AppFooter;
