import React from 'react';
import PropTypes, { arrayOf, shape } from 'prop-types';
import FullHeaderSection from './FullHeaderSection';
// import BrandLogo from 'components/shared/BrandLogo';
import './FullHeaderNarrowView.scss';

const FullHeaderNarrowView = (props) => {
  const { minSectionHeight, baseTags, title, subtitle } = props;
  const [title1, title2, title3] = title;

  const section1 = (
    <FullHeaderSection
      minHeight={minSectionHeight}
      coverUrl={title1.coverUrl}
      coverPosition="center center"
      blanketColor="rgba(0, 0, 0, .5)"
    >
      <div styleName="title title--1">{title1.text}</div>
    </FullHeaderSection>
  );

  const section2 = (
    <FullHeaderSection
      minHeight={minSectionHeight}
      coverUrl={title2.coverUrl}
      coverPosition="center center"
      blanketColor="rgba(0, 0, 0, .5)"
    >
      <div styleName="title title--2">{title2.text}</div>
      {/* <ATFDateText content={dateText} /> */}
    </FullHeaderSection>
  );

  const section3 = (
    <FullHeaderSection
      minHeight={minSectionHeight}
      coverUrl={title3.coverUrl}
      coverPosition="center center"
      blanketColor="rgba(0, 0, 0, .5)"
    >
      <div styleName="title title--3">{title3.text}</div>
    </FullHeaderSection>
  );

  const section4 = (
    <FullHeaderSection
      minHeight={minSectionHeight}
      coverUrl={subtitle.coverUrl}
      coverPosition="center center"
      blanketColor="rgba(0, 0, 0, .5)"
    >
      <div styleName="subtitle">{subtitle.text}</div>
      <div styleName="tags">
        <div styleName="tags__pretext">{subtitle.tagsPretext}</div>
        <div styleName="tags__text">{baseTags}</div>
      </div>
      <div styleName="share-invite">
        {/* <ShareInviteCard /> */}
      </div>
    </FullHeaderSection>
  );

  return (
    <article styleName="header">
      {section1}
      {section2}
      {section3}
      {section4}
    </article>
  );
};

FullHeaderNarrowView.propTypes = {
  minSectionHeight: PropTypes.string.isRequired,
  baseTags: PropTypes.string.isRequired,
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
