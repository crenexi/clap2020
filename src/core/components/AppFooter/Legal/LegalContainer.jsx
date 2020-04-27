import React from 'react';
import { useSelector } from 'react-redux';
import Legal from './Legal';

const LegalContainer = () => {
  const { cxUrl, cxFavUrl, tosUrl, ppUrl } = useSelector(s => ({
    cxUrl: s.core.meta.crenexi.url,
    cxFavUrl: s.core.meta.crenexi.favUrl,
    tosUrl: s.core.meta.legal.tosUrl,
    ppUrl: s.core.meta.legal.ppUrl,
  }));

  const thisYear = (new Date()).getFullYear();

  return (
    <Legal
      thisYear={thisYear}
      cxUrl={cxUrl}
      cxFavUrl={cxFavUrl}
      tosUrl={tosUrl}
      ppUrl={ppUrl}
    />
  );
};

export default LegalContainer;
