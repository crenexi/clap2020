import React from 'react';
import { Link } from 'react-router-dom';
import { FaIcon } from '@components/ui';
import Guide from './Guide';
import './Design.scss';

const Design = () => (
  <article styleName="design">
    <header styleName="header">
      <Link styleName="back-link" to="/">
        <FaIcon icon="long-arrow-alt-left" />
        Back to Clap2020
      </Link>
      <h2 styleName="title">Design Guide</h2>
    </header>
    <Guide />
  </article>
);

export default Design;
