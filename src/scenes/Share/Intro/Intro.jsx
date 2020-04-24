import React from 'react';
import PropTypes from 'prop-types';
// import shareSectionType from '@types/share-section-type';
import Hero from '../Hero';
import Section from '../Section';
import './Intro.scss';

const Intro = ({ heroCoverUrl }) => {
  const hero = (
    <Hero
      url={heroCoverUrl}
      imagePosition="70% 55%"
      title="Spread"
      subtitle="the word, not the virus"
    />
  );

  const test = 'Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.';

  return (
    <div styleName="frame">
      <div styleName="hero">{hero}</div>
      <Section>
        Body
      </Section>
      <Section title="Fusce vulputate eleifend sapien. Vestibulum purus quam">
        Body
      </Section>
      <Section brief={test} wide>
        Body
      </Section>
      <Section wide title="Fusce vulputate eleifend sapien. Vestibulum purus quam" brief={test}>
        Body
      </Section>
    </div>
  );
};

Intro.propTypes = {
  heroCoverUrl: PropTypes.string.isRequired,
};

export default Intro;
