import React from 'react';
import { arrayOf } from 'prop-types';
import brandPlatformType from 'types/brand-platform';
import FaIcon from 'components/shared/FaIcon';
import './BrandSocialNavView.scss';

const BrandSocialNavView = ({ platforms }) => {
  const navItems = platforms.map(({ id, name, url, icon }) => (
    <div styleName="nav__item" key={id}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div styleName="nav__circle">
          <div styleName="nav__icon">
            <FaIcon icon={icon} prefix="fab" />
          </div>
        </div>
        <div styleName="nav__label">
          <div styleName="nav__label-text">{name}</div>
          <FaIcon icon="external-link" />
        </div>
      </a>
    </div>
  ));

  return <div styleName="nav">{navItems}</div>;
};

BrandSocialNavView.propTypes = {
  platforms: arrayOf(brandPlatformType).isRequired,
};

export default BrandSocialNavView;
