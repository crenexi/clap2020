import React from 'react';
import { useSelector } from 'react-redux';
import * as Scroll from 'react-scroll';
import useBreakpoint from '@hooks/use-breakpoint';
import { BgCover, BigQuote } from '@components/ui';
import WarConditions from './WarConditions';
import './ThisIsWar.scss';

const ThisIsWar = () => {
  const ScrollElement = Scroll.Element;

  const { coverUrl, warConditions, featuredQuote } = useSelector(s => ({
    coverUrl: s.scenes.home.thisIsWar.coverUrl,
    warConditions: s.scenes.home.thisIsWar.warConditions,
    featuredQuote: s.scenes.home.thisIsWar.featuredQuote,
  }));

  const isGtSm = useBreakpoint('gt-sm');

  const warContentSecondary = (
    <div styleName="bottom">
      <div styleName="featured-quote">
        <BigQuote quote={featuredQuote} extraLarge />
      </div>
    </div>
  );

  return (
    <ScrollElement styleName="war" name="thisIsWar">
      <div styleName="cover-frame">
        <BgCover
          url={coverUrl}
          imagePosition="left top"
          blanketColor="rgba(8, 36, 94, .5)"
        >
          <div styleName="cover-content">
            <div styleName="top">
              <div styleName="heading">This is</div>
              <div styleName="heading heading--bold">War</div>
            </div>
            {isGtSm && warContentSecondary}
          </div>
        </BgCover>
      </div>
      {!isGtSm && warContentSecondary}
      <WarConditions conditions={warConditions} />
    </ScrollElement>
  );
};

export default ThisIsWar;
