import React from 'react';
import * as Scroll from 'react-scroll';
import ThreeStepsRow from './ThreeStepsRow';
import './ThreeStepsView.scss';

const ThreeStepsView = () => {
  const ScrollElement = Scroll.Element;

  return (
    <ScrollElement styleName="three" name="threeSteps">
      <h2>Three Steps...</h2>
      <div styleName="three__main">
        <div styleName="three__steps">
          <ThreeStepsRow />
          <ThreeStepsRow />
          <ThreeStepsRow />
        </div>
      </div>
    </ScrollElement>
  );
};

export default ThreeStepsView;
