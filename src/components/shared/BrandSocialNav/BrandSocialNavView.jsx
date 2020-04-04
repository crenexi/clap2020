import React from 'react';
import { arrayOf } from 'prop-types';
import brandPlatformType from 'types/brand-platform';
import FaIcon from 'components/shared/FaIcon';
import './BrandSocialNavView.scss';

const BrandSocialNavView = ({ platforms }) => {
  const navItems = platforms.map(({ name, url, icon }) => (
    <div styleName="nav__item" key={name}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div styleName="nav__icon">
          <FaIcon icon={icon} prefix="fab" />
        </div>
        <div styleName="nav__label">{name}</div>
      </a>
    </div>
  ));

  return <div styleName="nav">{navItems}</div>;
};

BrandSocialNavView.propTypes = {
  platforms: arrayOf(brandPlatformType).isRequired,
};

export default BrandSocialNavView;
