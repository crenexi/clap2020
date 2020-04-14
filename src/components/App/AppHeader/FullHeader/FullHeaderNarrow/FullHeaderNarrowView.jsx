import React from 'react';
import PropTypes, { arrayOf, shape } from 'prop-types';
import * as Scroll from 'react-scroll';
import scrollService from 'services/scroll-service';
import IconButton from 'components/shared/IconButton';
import ATFMaskIcon from 'components/shared/ATFMaskIcon';
import ATFDateTime from 'components/shared/ATFDateTime';
import FaIcon from 'components/shared/FaIcon';
import ShareInviteCard from 'components/shared/ShareInviteCard';
import FullHeaderSection from './FullHeaderSection';
import './FullHeaderNarrowView.scss';

const FullHeaderNarrowView = (props) => {
  const ScrollElement = Scroll.Element;
  const { minSectionHeight, baseTags, event, title, subtitle } = props;
  const [title1, title2, title3] = title;

  // Event: scroll to ThreeSteps
  const handleDownClick = (target) => {
    scrollService.scrollToElement(target);
  };

  const sectionGroupStyle = { minHeight: minSectionHeight };

  const section1 = (
    <FullHeaderSection
      coverUrl={title1.coverUrl}
      coverPosition="13% 30%"
      blanketColor="rgba(5, 25, 65, .5)"
    >
      <div styleName="title title--1">
        <div styleName="title__text">{title1.text}</div>
      </div>
    </FullHeaderSection>
  );

  const section2 = (
    <FullHeaderSection
      coverUrl={title2.coverUrl}
      coverPosition="75% top"
      blanketColor="rgba(5, 25, 65, .8)"
    >
      <div styleName="title title--2">
        <div styleName="title__text">{title2.text}</div>
      </div>
    </FullHeaderSection>
  );

  const section3 = (
    <FullHeaderSection
      coverUrl={title3.coverUrl}
      coverPosition="left center"
      blanketColor="rgba(5, 25, 65, .85)"
    >
      <div styleName="section-frame">
        <div styleName="section-frame__start">
          <div styleName="title title--3">
            <div styleName="title__text">{title3.text}</div>
          </div>
        </div>
        <div styleName="section-frame__end">
          <IconButton
            variant="inverted"
            icon="arrow-alt-down"
            label="Join the Clap"
            click={() => handleDownClick('headerPartTwo')}
          />
        </div>
      </div>
    </FullHeaderSection>
  );

  const section4 = (
    <FullHeaderSection
      coverUrl={subtitle.coverUrl}
      coverPosition="center bottom"
      blanketColor="rgba(5, 25, 65, .75)"
    >
      <div styleName="section-frame">
        <div styleName="section-frame__start">
          <div styleName="about">
            <div styleName="about-card">
              <div styleName="about-card__heading">What</div>
              <ATFMaskIcon />
              <div styleName="about-card__text">{subtitle.text}</div>
            </div>
            <div styleName="about-card">
              <div styleName="about-card__heading">When</div>
              <ATFDateTime event={event} />
            </div>
            <div styleName="about-card">
              <div styleName="about-card__heading">Where</div>
              <div styleName="about-card__text">
                <FaIcon icon="globe" />
                <span>&nbsp;The United States (local time)</span>
              </div>
            </div>
            <ShareInviteCard />
          </div>
        </div>
        <div styleName="section-frame__end">
          <IconButton
            variant="inverted"
            icon="arrow-alt-down"
            label="3 Simple Steps"
            click={() => handleDownClick('threeSteps')}
          />
        </div>
      </div>
    </FullHeaderSection>
  );

  return (
    <article styleName="header">
      <div
        styleName="title-sections"
        style={sectionGroupStyle}
      >
        {section1}
        {section2}
        {section3}
      </div>
      <ScrollElement
        name="headerPartTwo"
        styleName="subtitle-sections"
        style={sectionGroupStyle}
      >
        {section4}
      </ScrollElement>
    </article>
  );
};

FullHeaderNarrowView.propTypes = {
  minSectionHeight: PropTypes.string.isRequired,
  baseTags: PropTypes.string.isRequired,
  event: shape({
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
    tagsPretext: PropTypes.string.isRequired,
  }).isRequired,
};

export default FullHeaderNarrowView;
