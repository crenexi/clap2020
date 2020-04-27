import React from 'react';
import PropTypes from 'prop-types';
import { Button, CopyCard } from '@components/ui';
import Section from '../../Section';
import './CopyCountdown.scss';

const CopyCountdown = (props) => {
  const { url, title, brief, timeUntil } = props;

  return (
    <div styleName="frame">
      <Section title={title} brief={brief} inverted narrow>
        <CopyCard overline="Countdown URL" value={url}>
          <div styleName="url">{url}</div>
        </CopyCard>
        <div styleName="time-until">
          <span>Clap time is <strong>{timeUntil}</strong>!</span>
        </div>
        <div styleName="invite">
          <Button variant="inverted" to="/get-ready">
            View Countdown
          </Button>
        </div>
      </Section>
    </div>
  );
};

CopyCountdown.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  brief: PropTypes.string.isRequired,
  timeUntil: PropTypes.string.isRequired,
};

export default CopyCountdown;
