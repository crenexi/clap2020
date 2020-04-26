import React from 'react';
import PropTypes from 'prop-types';
import { ShareCard } from '@components/campaign';
import Section from '../../Section';
import './QuickShare.scss';

const QuickShare = (props) => {
  const { title, brief } = props;

  const TEST = 'TEST PAYLOAD';

  const cardAll = (
    <ShareCard overline="All Hashtags" payload={TEST}>
      Body...
    </ShareCard>
  );

  const cardMinimal = (
    <ShareCard overline="Minimal Hashtags" payload={TEST}>
      Body...
    </ShareCard>
  );

  return (
    <div styleName="frame">
      <Section title={title} brief={brief}>
        <div styleName="section-card">{cardAll}</div>
        <div styleName="section-card">{cardMinimal}</div>
      </Section>
    </div>
  );
};

QuickShare.propTypes = {
  title: PropTypes.string.isRequired,
  brief: PropTypes.string.isRequired,
};

export default QuickShare;
