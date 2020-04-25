import React from 'react';
import { useSelector } from 'react-redux';
import Section from '../../Section';
import './QuickShare.scss';

const QuickShare = () => {
  const { title, subtitle } = useSelector((s) => {
    return s.scenes.share.social.quickShare;
  });

  return (
    <div styleName="frame">
      <Section title={title} subtitle={subtitle}>
        Quick Share
      </Section>
    </div>
  );
};

export default QuickShare;
