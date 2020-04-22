import React, { Fragment } from 'react';
import { BrandLogo, BrandFav } from '@components/brand';
import Heading from '../../Heading';
import './Logos.scss';

const Logos = () => {
  const gridItemClass = 'grid-item';
  const gridItemInvertedClass = `${gridItemClass} ${gridItemClass}--inverted`;

  return (
    <Fragment>
      <Heading title="Logo Variants" />
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
      <Heading title="Fav Variants" />
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
