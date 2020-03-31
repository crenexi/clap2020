import React from 'react';
import BgCover from 'components/shared/BgCover';
import './FullHeader.scss';

const FullHeader = () => {
  const assetsPath = process.env.ASSETS_PATH;
  const coverUrl = `${assetsPath}/covers/nurse.jpg`;

  return (
    <div styleName="header">
      <BgCover
        url={coverUrl}
        imagePosition="75% top"
        blanketColor="rgba(19,54,109, .75)"
        animate
      >
        Test
      </BgCover>
    </div>
  );
};

export default FullHeader;
