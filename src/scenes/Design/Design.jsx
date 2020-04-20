import React from 'react';
import { Link } from 'react-router-dom';
import FaIcon from 'components/shared/FaIcon';
import DesignGuide from 'components/scenes/Design/DesignGuide';
import './Design.scss';

const Design = () => (
  <article styleName="design">
    <header styleName="design__header">
      <Link styleName="design__back-link" to="/">
        <FaIcon icon="long-arrow-alt-left" />
        Back to Clap2020
      </Link>
      <h2 styleName="design__title">Design Guide</h2>
    </header>
    <DesignGuide />
  </article>
);

export default Design;
