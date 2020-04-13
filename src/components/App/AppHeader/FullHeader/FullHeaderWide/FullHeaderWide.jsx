import React from 'react';
import useBreakpoint from 'hooks/use-breakpoint';
// import useContent from 'hooks/use-content';
// import scrollService from 'services/scroll-service';
// import BrandLogo from 'components/shared/BrandLogo';
// import IconButton from 'components/shared/IconButton';
// import IconParade from './IconParade';
import './FullHeaderWide.scss';

const FullHeaderWide = () => {
  // const { fullHeader: content, baseTags } = useContent();

  // Event: scroll to ThreeSteps
  // const handleDownClick = () => {
  //   scrollService.scrollToElement('threeSteps');
  // };

  // Only render on large
  const isGtSm = useBreakpoint('gt-sm');
  if (!isGtSm) return null;

  return (
    <article styleName="header">
      Header Wide
      {/* <section styleName="header__logo-aside">
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
          click={handleDownClick}
        />
      </aside>
      <IconParade /> */}
    </article>
  );
};

export default FullHeaderWide;
