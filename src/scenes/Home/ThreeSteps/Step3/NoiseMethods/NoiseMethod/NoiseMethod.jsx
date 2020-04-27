import React from 'react';
import noiseMethodType from '@types/noise-method-type';
import { FaIcon } from '@components/ui';
import './NoiseMethod.scss';

const NoiseMethod = ({ item }) => {
  const { title, subtitle, icon } = item;

  return (
    <div styleName="frame">
      <div styleName="card">
        <div styleName="card__icon">
          <FaIcon icon={icon} />
        </div>
        <div styleName="card__title">{title}</div>
        <div styleName="card__subtitle">{subtitle}</div>
      </div>
    </div>
  );
};

NoiseMethod.propTypes = {
  item: noiseMethodType.isRequired,
};

export default NoiseMethod;
