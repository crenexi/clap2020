import React, { Fragment } from 'react';
import QuickNavBar from 'components/shared/QuickNavBar';
import ThankYou from 'components/shared/ThankYou';
import './Praise.scss';

const Praise = () => (
  <Fragment>
    <QuickNavBar />
    <article styleName="praise">
      <section><ThankYou /></section>
    </article>
  </Fragment>
);

export default Praise;
