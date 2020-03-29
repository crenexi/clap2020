import React, { Fragment } from 'react';
import DesignSection from 'components/scenes/Design/DesignSection';
import Palette from 'components/scenes/Design/Palette';

const DesignGuide = () => (
  <Fragment>
    <DesignSection title="Color Palette">
      <Palette />
    </DesignSection>
  </Fragment>
);

export default DesignGuide;
