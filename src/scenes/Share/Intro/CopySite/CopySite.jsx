import React from 'react';
import { useSelector } from 'react-redux';
import { CopyCard } from '@components/ui';
import Section from '../../Section';
import './CopySite.scss';

const CopySite = () => {
  const url = 'https://clap2020.com';
  const { title, brief } = useSelector(s => s.scenes.share.intro.copySite);

  return (
    <div styleName="frame">
      <Section title={title} brief={brief} narrow>
        <CopyCard overline="Site URL" value={url}>
          <div styleName="url">{url}</div>
        </CopyCard>
      </Section>
    </div>
  );
};

export default CopySite;
