import React from 'react';
import { useSelector } from 'react-redux';
import Section from '../../Section';
import './QuickTweet.scss';

const QuickTweet = () => {
  const { title, subtitle } = useSelector((s) => {
    return s.scenes.share.social.quickTweet;
  });

  return (
    <div styleName="frame">
      <Section title={title} subtitle={subtitle} inverted narrow>
        Quick Tweet
      </Section>
    </div>
  );
};

export default QuickTweet;
