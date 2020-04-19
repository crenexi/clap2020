import React from 'react';
import useContent from 'hooks/use-content';
import NoiseMethod from './NoiseMethod';
import './NoiseMethods.scss';

const NoiseMethods = () => {
  const { sceneContent } = useContent();
  const { noiseMethods } = sceneContent.home;

  const methods = noiseMethods.map(item => (
    <div styleName="methods__item">
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
