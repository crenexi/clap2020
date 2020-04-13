import React from 'react';
import PropTypes from 'prop-types';
import fullHeaderType from 'types/full-header';
// import BrandLogo from 'components/shared/BrandLogo';
import './FullHeaderNarrow.scss';

const FullHeaderNarrow = ({ content, baseTags }) => {
  const { title, tagsPretext, subtitle } = content;
  const [title1, title2, title3] = title;

  return (
    <article styleName="header">
      <section styleName="section">
        <div styleName="section__main">
          <div styleName="title title--1">{title1}</div>
          {/* <ATFDateText content={dateText} /> */}
        </div>
      </section>
      <section styleName="section">
        <div styleName="section__main">
          <div styleName="title title--2">{title2}</div>
        </div>
      </section>
      <section styleName="section">
        <div styleName="section__main">
          <div styleName="title title--3">{title3}</div>
        </div>
      </section>
      <section styleName="section">
        <div styleName="section__main">
          <div styleName="subtitle">{subtitle}</div>
          <div styleName="tags">
            <div styleName="tags__pretext">{tagsPretext}</div>
            <div styleName="tags__text">{baseTags}</div>
          </div>
          <div styleName="share-invite">
            {/* <ShareInviteCard /> */}
          </div>
        </div>
      </section>
    </article>
  );
};

FullHeaderNarrow.propTypes = {
  content: fullHeaderType.isRequired,
  baseTags: PropTypes.string.isRequired,
};

export default FullHeaderNarrow;
