import React from 'react';
import PropTypes from 'prop-types';
import { ShareCard } from '@components/campaign';
import Section from '../../Section';
import './QuickShare.scss';

const QuickShare = (props) => {
  const { title, brief } = props;

  return (
    <div styleName="frame">
      <Section title={title} brief={brief} wide>
        <div styleName="main">
          <div styleName="sections">
            <div styleName="section">
              <ShareCard overline="All Hashtags" />
            </div>
            <div styleName="section">
              <ShareCard overline="Minimal Hashtags" />
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
};

export default QuickShare;
