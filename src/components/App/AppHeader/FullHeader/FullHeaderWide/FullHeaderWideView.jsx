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

  // Event: scroll to ThreeSteps
  const handleDownClick = (target) => {
    scrollService.scrollToElement(target);
  };

  return (
    <article styleName="header">
      <div styleName="start">
        <div styleName="start__brand">
          <BrandLogo variant="main" />
        </div>
      </div>
      <div styleName="main">
        HEADER!
        {title1.text}
        {title2.text}
        {title3.text}
        {subtitle.text}
        {nextEvent.date}
      </div>
      <aside styleName="end">
        <div styleName="end__down-invite">
          <IconButton
            icon="arrow-alt-down"
            label="3 Simple Steps"
            click={handleDownClick}
          />
        </div>
      </aside>
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
