import React, { useState } from 'react';
import Button from 'components/shared/Button';
import logger from 'services/logger';
import ShareButtons from 'components/shared/ShareButtons';
import HashtagsDialog from './HashtagsDialog';
import HashtagsMain from './HashtagsMain';
import './Hashtags.scss';

const Hashtags = () => {
  const [payload, setPayload] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleChangePayload = (payload) => {
    setPayload(payload);
  };

  const handleOpenDialog = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);

  const handleShare = ({ to }) => {
    if (to === 'webAPI') {
      logger.info(`SHARING TO WEB API: ${payload}`);
      return;
    }

    if (to === 'facebook') {
      logger.info(`SHARING TO FACEBOOK: ${payload}`);
      return;
    }

    if (to === 'twitter') {
      logger.info(`SHARING TO TWITTER: ${payload}`);
      return;
    }

    logger.error(`Sharing target ${to} not supported`);
  };

  const handleCopy = () => {
    logger.info(`COPYING: ${payload}`);
  };

  const mainComponent = (
    <HashtagsMain
      changePayload={handleChangePayload}
    />
  );

  const actionsComponent = (
    <ShareButtons share={handleShare} copy={handleCopy} />
  );

  return (
    <div styleName="card">
      <Button click={handleOpenDialog}>Open Hashtags Dialog</Button>
      <HashtagsDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        mainComponent={mainComponent}
        actionsComponent={actionsComponent}
      />
    </div>
  );
};

export default Hashtags;
