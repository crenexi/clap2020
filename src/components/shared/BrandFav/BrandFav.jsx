import React from 'react';
import PropTypes, { oneOf } from 'prop-types';
import useSettings from 'hooks/use-settings';
import { capitalize } from 'utils/helpers';
import './BrandFav.scss';

const BrandFav = ({ className, variant, ext, width }) => {
  const src = `/assets/brand/Fav_${capitalize(variant)}.${ext}`;

  return (
    <div className={className} styleName="fav" style={{ width }}>
      <img style={{ maxWidth: '100%' }} src={src} alt="Clap2020 Fav" />
    </div>
  );
};

BrandFav.propTypes = {
  className: PropTypes.string,
  variant: oneOf(['main', 'white', 'dark']),
  ext: oneOf(['svg', 'png']),
  width: PropTypes.string,
};

BrandFav.defaultProps = {
  className: '',
  variant: 'main',
  ext: 'svg',
  width: '3rem',
};

export default BrandFav;
