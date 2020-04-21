import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import useBreakpoint from '@hooks/use-breakpoint';
import quoteType from '@types/quote';
import warConditionType from '@types/war-condition';
import BgCover from '@components/shared/BgCover';
import BigQuote from '@components/shared/BigQuote';
import WarConditions from './WarConditions';
import './ThisIsWarView.scss';

const ThisIsWarView = (props) => {
  const { coverUrl, featuredQuote, warConditions } = props;
  const isGtSm = useBreakpoint('gt-sm');

  const warContentSecondary = (
    <div styleName="war__bottom">
      <div styleName="war__featured-quote">
        <BigQuote quote={featuredQuote} extraLarge />
      </div>
    </div>
  );

  return (
    <div styleName="war">
      <div styleName="war__cover-frame">
        <BgCover
          url={coverUrl}
          imagePosition="left top"
          blanketColor="rgba(8, 36, 94, .5)"
        >
          <div styleName="war__cover-content">
            <div styleName="war__top">
              <div styleName="war__heading">This is</div>
              <div styleName="war__heading war__heading--bold">War</div>
            </div>
            {isGtSm && warContentSecondary}
          </div>
        </BgCover>
      </div>
      {!isGtSm && warContentSecondary}
      <WarConditions conditions={warConditions} />
    </div>
  );
};

ThisIsWarView.propTypes = {
  coverUrl: PropTypes.string.isRequired,
  featuredQuote: quoteType.isRequired,
  warConditions: arrayOf(warConditionType).isRequired,
};

export default ThisIsWarView;
