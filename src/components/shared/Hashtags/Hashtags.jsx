import React, { useState } from 'react';
import Button from 'components/shared/Button';
import HashtagsDialog from './HashtagsDialog';
// import HashtagsMain from './HashtagsMain';
import './Hashtags.scss';

const Hashtags = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);

  return (
    <div styleName="card">
      <Button click={handleOpenDialog}>Open Hashtags Dialog</Button>
      <HashtagsDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
      >
        Hello World
        {/* <HashtagsMain /> */}
      </HashtagsDialog>
    </div>
  );
};

export default Hashtags;
