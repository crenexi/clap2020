import React from 'react';
import BgCover from 'components/shared/BgCover';
import './FullHeader.scss';

const FullHeader = () => {
  const assetsPath = process.env.ASSETS_PATH;
  const coverUrl = `${assetsPath}/covers/nurse.jpg`;

  return (
    <div styleName="header">
      <BgCover url={coverUrl} imagePosition="75% top" />
    </div>
  );
};

export default FullHeader;
