import React, { Fragment } from 'react';
import DesignSection from 'components/scenes/Design/DesignSection';
import Logos from './Logos';
import Palette from './Palette';

const DesignGuide = () => (
  <Fragment>
    <DesignSection title="Logos">
      <Logos />
    </DesignSection>
    <DesignSection title="Color Palette">
      <Palette />
    </DesignSection>
  </Fragment>
);

export default DesignGuide;
