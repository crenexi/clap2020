import React from 'react';
import PropTypes, { arrayOf, shape } from 'prop-types';
import scrollService from 'services/scroll-service';
import BrandLogo from 'components/shared/BrandLogo';
import IconButton from 'components/shared/IconButton';
// import ATFAbout from 'components/shared/ATFAbout';
import IconParade from './IconParade';
import './FullHeaderWideView.scss';

const FullHeaderWideView = (props) => {
  const { nextEvent, title, subtitle } = props;
  const [title1, title2, title3] = title;

  // First image
  const coreCoverUrl = title1.coverUrl;
  const coreCoverStyle = { backgroundImage: `url('${coreCoverUrl}')` };

  // Event: scroll to ThreeSteps
  const handleDownClick = () => {
    scrollService.scrollToElement('threeSteps');
  };

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
      <div styleName="core-cover">
        <div styleName="core-cover__bg" style={coreCoverStyle} />
        <div styleName="core-cover__blanket" />
        <div styleName="core-cover__blend" />
      </div>
    </div>
  );

  // Frame main
  const frameMain = (
    <div styleName="frame__main">
      <section styleName="core">
        {title1.text}
        {title2.text}
        {title3.text}
        {subtitle.text}
        {nextEvent.date}
      </section>
      <aside styleName="aside">
        Test
      </aside>
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
