import React from 'react';
import PropTypes from 'prop-types';
import fullHeaderType from 'types/full-header';
import BrandLogo from 'components/shared/BrandLogo';
import IconButton from 'components/shared/IconButton';
import IconParade from './IconParade';
import './FullHeaderWide.scss';

const FullHeaderWide = (props) => {
  const { content, baseTags, downClick } = props;

  return (
    <article styleName="header">
      <section styleName="header__logo-aside">
        <div styleName="header__logo">
          <BrandLogo variant="main" />
        </div>
      </section>
      <section>
        HELLO WORLD {content.tagsPretext}
        {baseTags}
      </section>
      <aside styleName="header__down-invite">
        <IconButton
          icon="arrow-alt-down"
          label="3 Simple Steps"
          click={downClick}
        />
      </aside>
      <IconParade />
    </article>
  );
};

FullHeaderWide.propTypes = {
  content: fullHeaderType.isRequired,
  baseTags: PropTypes.string.isRequired,
  downClick: PropTypes.func.isRequired,
};

export default FullHeaderWide;
