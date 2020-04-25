import React from 'react';
import PropTypes from 'prop-types';
import { ShareCard, ShareButtons } from '@components/campaign';
import Section from '../../Section';
import './QuickShare.scss';

const QuickShare = (props) => {
  const { title, brief, onShare, onCopy } = props;

  const cardAll = (
    <ShareCard overline="All Hashtags">
      <ShareButtons share={onShare} copy={onCopy} />
    </ShareCard>
  );

  const cardMinimal = (
    <ShareCard overline="Minimal Hashtags">
      <ShareButtons share={onShare} copy={onCopy} />
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
  onShare: PropTypes.func.isRequired,
  onCopy: PropTypes.func.isRequired,
};

export default QuickShare;
