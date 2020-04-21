import React, { Fragment } from 'react';
import BrandLogo from 'shared/components/BrandLogo';
import BrandFav from 'shared/components/BrandFav';
import DesignHeading from '../../Heading';
import './Logos.scss';

const Logos = () => {
  const gridItemClass = 'grid-item';
  const gridItemInvertedClass = `${gridItemClass} ${gridItemClass}--inverted`;

  return (
    <Fragment>
      <DesignHeading title="Logo Variants" />
      <div styleName="grid">
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
      <div styleName="grid">
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
