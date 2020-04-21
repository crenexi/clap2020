import React from 'react';
import PropTypes, { arrayOf, shape } from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import scrollService from '@services/scroll-service';
import BrandLogo from '@components/shared/BrandLogo';
import IconButton from '@components/shared/IconButton';
import Button from '@components/shared/Button';
import ATFAbout from '@components/shared/ATFAbout';
import IconParade from './IconParade';
import './FullHeaderWideView.scss';

const FullHeaderWideView = (props) => {
  const asideBreakpoint = 1500;
  const asideMediaQuery = `(min-width: ${asideBreakpoint}px)`;
  const isLargeLayout = useMediaQuery(asideMediaQuery);

  const { nextEvent, title, subtitle } = props;
  const [title1, title2, title3] = title;

  // Titles
  const title1Text = title1.text;
  const title2Text = title2.text;
  const title3Text = title3.text;

  // First image
  const coreCoverUrl = title1.coverUrl;
  const coreCoverStyle = { backgroundImage: `url('${coreCoverUrl}')` };

  // Subtitle image
  const asideCoverUrl = subtitle.coverUrl;
  const asideCoverStyle = { backgroundImage: `url('${asideCoverUrl}')` };

  // Event: scroll to ThreeSteps
  const handleDownClick = () => {
    scrollService.scrollToElement('threeSteps');
  };

  const thankYouInvite = (
    <Button
      to="/praise"
      variant="white"
      endIcon="arrow-circle-right"
    >
      Groups to Thank
    </Button>
  );

  const countdownInvite = (
    <Button
      to="/get-ready"
      variant="inverted"
      endIcon="arrow-circle-right"
    >
      Clap Countdown
    </Button>
  );

  // Frame start
  const frameStart = (
    <div styleName="frame__start">
      <div styleName="frame__brand">
        <BrandLogo variant="white" />
      </div>
    </div>
  );

  // Frame end
  const frameEnd = (
    <div styleName="frame__end">
      <div styleName="frame__down-invite">
        <IconButton
          variant="white"
          icon="arrow-alt-down"
          label="3 Simple Steps"
          click={handleDownClick}
          invite
        />
      </div>
    </div>
  );

  // Frame cover
  const frameCover = (
    <div styleName="frame__cover">
      <div styleName="cover cover--core">
        <div styleName="cover__bg" style={coreCoverStyle} />
        <div styleName="cover__blanket" />
        <div styleName="cover__blend" />
      </div>
      <div styleName="cover cover--aside">
        <div styleName="cover__bg" style={asideCoverStyle} />
        <div styleName="cover__blanket" />
        <div styleName="cover__blend" />
      </div>
    </div>
  );

  // Frame main
  const frameMain = (
    <div styleName="frame__main">
      <section styleName="core">
        <div styleName="core__left">
          <div styleName="core__left-content">
            <div styleName="core__title">
              <div styleName="core__title1">{title1Text}</div>
              <div styleName="core__title2">{title2Text}</div>
              <div styleName="core__title3">{title3Text}</div>
            </div>
            <div styleName="core__actions">
              {thankYouInvite}
              {countdownInvite}
            </div>
          </div>
        </div>
        {!isLargeLayout && (
          <div styleName="core__right">
            <ATFAbout nextEvent={nextEvent} subtitle={subtitle} />
          </div>
        )}
      </section>
      {isLargeLayout && (
        <aside styleName="aside">
          <ATFAbout nextEvent={nextEvent} subtitle={subtitle} />
        </aside>
      )}
    </div>
  );

  // Header has three items: core, aside, and icon parade
  return (
    <article styleName="frame">
      {frameCover}
      <div styleName="frame__grid">
        {frameStart}
        {frameMain}
        {frameEnd}
      </div>
      <IconParade />
    </article>
  );
};

FullHeaderWideView.propTypes = {
  nextEvent: shape({
    day: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
  title: arrayOf(shape({
    coverUrl: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  subtitle: shape({
    coverUrl: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
export default FullHeaderWideView;
