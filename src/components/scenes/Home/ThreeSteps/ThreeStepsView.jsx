import React from 'react';
import ThreeStepsRow from './ThreeStepsRow';
import './ThreeStepsView.scss';

const ThreeStepsView = () => (
  <div styleName="three">
    <h2>Three Steps...</h2>
    <div styleName="three__main">
      <div styleName="three__steps">
        <ThreeStepsRow />
        <ThreeStepsRow />
        <ThreeStepsRow />
      </div>
    </div>
  </div>
);

export default ThreeStepsView;
