import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ShareInviteCard from './ShareInviteCard';

const ShareInviteCardContainer = ({ large }) => {
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
      large={large}
    />
  );
};

ShareInviteCardContainer.propTypes = {
  large: PropTypes.bool,
};

ShareInviteCardContainer.defaultProps = {
  large: false,
};

export default ShareInviteCardContainer;
