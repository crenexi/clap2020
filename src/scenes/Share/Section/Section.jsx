import React from 'react';
import classNames from 'classnames';
import shareSectionType from '@types/share-section-type';
import './Section.scss';

const Section = (props) => {
  const { children, title, brief, wide, narrow, inverted } = props;

  const styleName = classNames('section', {
    'section--wide': wide,
    'section--narrow': narrow,
    'section--inverted': inverted,
  });

  return (
    <div styleName={styleName}>
      <div styleName="section__frame">
        {title && <h2 styleName="title">{title}</h2>}
        {brief && <div styleName="brief">{brief}</div>}
        <div styleName="main">{children}</div>
      </div>
    </div>
  );
};

Section.propTypes = shareSectionType.isRequired;

export default Section;
