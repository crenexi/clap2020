import React from 'react';
import PropTypes from 'prop-types';
import MuiDialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { Button, IconButton } from '@components/ui';
import './Dialog.scss';

const Dialog = (props) => {
  const { open, onShare, onDownload, onClose } = props;

  const option1Instructions = 'Share to your story using your device share menu';
  const option2Instructions = 'Download this story-size poster to share manually';

  const dialogClasses = {
    paper: 'c2-ig-modal__paper',
  };

  const header = (
    <div styleName="header">
      <div styleName="header__title">Instagram &amp; Snapchat</div>
      <div styleName="header__close">
        <IconButton
          variant="inverted"
          size="small"
          icon="times"
          click={onClose}
        />
      </div>
    </div>
  );

  const option1 = (
    <div styleName="option">
      <div styleName="option__title">iOS/Android</div>
      <div styleName="option__instruct">
        <p>{option1Instructions}</p>
      </div>
      <div styleName="option__action">
        <Button
          variant="white"
          size="large"
          endIcon="share-alt"
          click={onShare}
        >
          Share Now
        </Button>
      </div>
    </div>
  );

  const option2 = (
    <div styleName="option">
      <div styleName="option__title">Download to Share</div>
      <div styleName="option__instruct">
        <p>{option2Instructions}</p>
      </div>
      <div styleName="option__action">
        <Button
          variant="white"
          size="large"
          endIcon="download"
          click={onDownload}
        >
          Download Poster
        </Button>
      </div>
    </div>
  );

  return (
    <MuiDialog classes={dialogClasses} open={open} onClose={onClose}>
      <MuiDialogTitle>{header}</MuiDialogTitle>
      <MuiDialogContent>
        <div styleName="options">
          {option1}
          {option2}
        </div>
      </MuiDialogContent>
    </MuiDialog>
  );
};

Dialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onShare: PropTypes.func.isRequired,
  onDownload: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Dialog;
