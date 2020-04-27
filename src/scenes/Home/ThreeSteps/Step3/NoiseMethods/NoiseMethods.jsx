import React from 'react';
import { useSelector } from 'react-redux';
import NoiseMethod from './NoiseMethod';
import './NoiseMethods.scss';

const NoiseMethods = () => {
  const noiseMethods = useSelector(s => s.scenes.home.noiseMethods);

  const methods = noiseMethods.map(item => (
    <div styleName="methods__item" key={item.title}>
      <NoiseMethod item={item} />
    </div>
  ));

  return (
    <div styleName="frame">
      <div styleName="methods">{methods}</div>
    </div>
  );
};

export default NoiseMethods;
