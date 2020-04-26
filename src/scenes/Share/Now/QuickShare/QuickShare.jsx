import React from 'react';
import PropTypes, { shape } from 'prop-types';
import { ShareCard } from '@components/campaign';
import Section from '../../Section';
import './QuickShare.scss';

const QuickShare = (props) => {
  const { title, brief, tagsText } = props;

  return (
    <div styleName="frame">
      <Section title={title} brief={brief} wide>
        <div styleName="main">
          <div styleName="sections">
            <div styleName="section">
              <ShareCard overline="All Hashtags" payload={tagsText.all} />
            </div>
            <div styleName="section">
              <ShareCard overline="Minimal Hashtags" payload={tagsText.minimal} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

QuickShare.propTypes = {
  title: PropTypes.string.isRequired,
  brief: PropTypes.string.isRequired,
  tagsText: shape({
    minimal: PropTypes.string.isRequired,
    all: PropTypes.string.isRequired,
  }).isRequired,
};

export default QuickShare;
