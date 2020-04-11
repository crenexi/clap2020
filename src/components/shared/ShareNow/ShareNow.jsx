import React, { useState } from 'react';
import shareService from 'services/share-service';
import copyService from 'services/copy-service';
import Button from 'components/shared/Button';
import ShareButtons from 'components/shared/ShareButtons';
import ShareDialog from './ShareDialog';
import ShareMain from './ShareMain';
import './ShareNow.scss';

const ShareNow = () => {
  const [payload, setPayload] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleChangePayload = (payload) => {
    setPayload(payload);
  };

  // Handle opening and closing of the share dialog
  const handleOpenDialog = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);

  // Handle share or copy of current payload
  const handleShare = ({ to }) => shareService.share({ to, payload });
  const handleCopy = () => copyService.copy({ payload });

  const mainComponent = (
    <ShareMain
      changePayload={handleChangePayload}
    />
  );

  const actionsComponent = (
    <ShareButtons share={handleShare} copy={handleCopy} />
  );

  return (
    <div styleName="card">
      <Button variant="primary" click={handleOpenDialog}>Share Now</Button>
      <ShareDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        mainComponent={mainComponent}
        actionsComponent={actionsComponent}
      />
    </div>
  );
};

export default ShareNow;
