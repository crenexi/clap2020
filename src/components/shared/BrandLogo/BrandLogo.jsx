import React from 'react';
import PropTypes, { oneOf } from 'prop-types';
import { Link } from 'react-router-dom';
import { capitalize } from 'utils/helpers';
import './BrandLogo.scss';

const BrandLogo = ({ className, variant, ext, width }) => {
  const assetsPath = process.env.ASSETS_PATH;
  const src = `${assetsPath}/brand/Logo_${capitalize(variant)}.${ext}`;

  return (
    <Link to="/" className={className} styleName="logo" style={{ width }}>
      <img style={{ maxWidth: '100%' }} src={src} alt="Clap2020 Logo" />
    </Link>
  );
};

BrandLogo.propTypes = {
  className: PropTypes.string,
  variant: oneOf(['main', 'white', 'dark']),
  ext: oneOf(['svg', 'png']),
  width: PropTypes.string,
};

BrandLogo.defaultProps = {
  className: '',
  variant: 'main',
  ext: 'svg',
  width: '100%',
};

export default BrandLogo;
