import React from 'react';
import PropTypes from 'prop-types';
import { ShareCard } from '@components/campaign';
import Section from '../../Section';
import './QuickShare.scss';

const QuickShare = (props) => {
  const { title, brief } = props;

  return (
    <div styleName="frame">
      <Section title={title} brief={brief}>
        <div styleName="main">
          <ShareCard overline="Quick Share" />
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
