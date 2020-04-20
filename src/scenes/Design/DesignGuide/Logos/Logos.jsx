import React, { Fragment } from 'react';
import BrandLogo from 'components/shared/BrandLogo';
import BrandFav from 'components/shared/BrandFav';
import DesignHeading from '../../DesignHeading';
import './Logos.scss';

const Logos = () => {
  const gridItemClass = 'logos__grid-item';
  const gridItemInvertedClass = `${gridItemClass} ${gridItemClass}--inverted`;

  return (
    <Fragment>
      <DesignHeading title="Logo Variants" />
      <div styleName="logos__grid">
        <div styleName={gridItemClass}>
          <BrandLogo variant="main" />
        </div>
        <div styleName={gridItemClass}>
          <BrandLogo variant="dark" />
        </div>
        <div styleName={gridItemInvertedClass}>
          <BrandLogo variant="white" />
        </div>
      </div>
      <DesignHeading title="Fav Variants" />
      <div styleName="logos__grid">
        <div styleName={gridItemClass}>
          <BrandFav variant="main" />
        </div>
        <div styleName={gridItemClass}>
          <BrandFav variant="dark" />
        </div>
        <div styleName={gridItemInvertedClass}>
          <BrandFav variant="white" />
        </div>
      </div>
    </Fragment>
  );
};

export default Logos;
