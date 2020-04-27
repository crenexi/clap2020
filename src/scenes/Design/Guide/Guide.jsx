import React, { Fragment } from 'react';
import Section from '../Section';
import Typography from './Typography';
import Logos from './Logos';
import Palette from './Palette';

const Guide = () => (
  <Fragment>
    <Section title="Typography">
      <Typography />
    </Section>
    <Section title="Logos">
      <Logos />
    </Section>
    <Section title="Color Palette">
      <Palette />
    </Section>
  </Fragment>
);

export default Guide;
