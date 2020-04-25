import React from 'react';
import { useSelector } from 'react-redux';
import Section from '../../Section';
import './QuickTweet.scss';

const QuickTweet = () => {
  const { title, brief } = useSelector((s) => {
    return s.scenes.share.social.quickTweet;
  });

  return (
    <div styleName="frame">
      <Section title={title} brief={brief}>
        Quick Tweet
      </Section>
    </div>
  );
};

export default QuickTweet;
