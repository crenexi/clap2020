import React from 'react';
import PropTypes from 'prop-types';
import ShareCard from './ShareCard';

const ShareCardContainer = ({ children, overline }) => {
  const handleShare = () => {
    console.log('Sharing!');
  };

  const handleCopy = () => {
    console.log('Copying!');
  };

  return (
    <ShareCard
      overline={overline}
      onShare={handleShare}
      onCopy={handleCopy}
    >
      {children}
    </ShareCard>
  );
};

ShareCardContainer.propTypes = {
  children: PropTypes.node.isRequired,
  overline: PropTypes.string.isRequired,
};

export default ShareCardContainer;
