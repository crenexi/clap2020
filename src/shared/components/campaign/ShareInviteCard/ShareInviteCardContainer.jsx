import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ShareInviteCard from './ShareInviteCard';

const ShareInviteCardContainer = ({ buttonLabel, large }) => {
  const { tagsPretext, tagsText, squarePoster } = useSelector(s => ({
    tagsPretext: s.campaign.tags.pretext,
    tagsText: s.campaign.tags.text,
    squarePoster: s.campaign.posters.find(p => p.format === 'square'),
  }));

  return (
    <ShareInviteCard
      tagsPretext={tagsPretext}
      tagsText={tagsText}
      posterThumbUrl={squarePoster.thumbUrl}
      buttonLabel={buttonLabel}
      large={large}
    />
  );
};

ShareInviteCardContainer.propTypes = {
  buttonLabel: PropTypes.string,
  large: PropTypes.bool,
};

ShareInviteCardContainer.defaultProps = {
  buttonLabel: '',
  large: false,
};

export default ShareInviteCardContainer;
