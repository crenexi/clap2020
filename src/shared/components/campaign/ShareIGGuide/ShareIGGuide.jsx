import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import { Button, IconButton } from '@components/ui';
import './ShareIGGuide.scss';

const ShareIGGuide = (props) => {
  const { open, title, brief, onShare, onDownload, onClose } = props;

  const header = (
    <div styleName="header">
      <h4 styleName="header__title">{title}</h4>
      <div styleName="header__close">
        <IconButton icon="times" click={onClose} />
      </div>
    </div>
  );

  const option1 = (
    <div styleName="option">
      <h6>Option 2: iOS/Android Share</h6>
      <div styleName="preview__preview">
        Preview...
      </div>
      <Button variant="primary" endIcon="share-alt" click={onShare}>
        Share Now
      </Button>
    </div>
  );

  const option2 = (
    <div styleName="option">
      <h6>Option 2: Download &amp; Share</h6>
      <div styleName="option__preview">
        Preview...
      </div>
      <Button variant="primary" endIcon="download" click={onDownload}>
        Download Poster
      </Button>
    </div>
  );

  const content = (
    <div styleName="guide">
      <div styleName="brief">{brief}</div>
      <div styleName="options">
        {option1}
        {option2}
      </div>
    </div>
  );

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{header}</DialogTitle>
      <DialogContent>{content}</DialogContent>
    </Dialog>
  );
};

ShareIGGuide.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.bool.isRequired,
  brief: PropTypes.bool.isRequired,
  onShare: PropTypes.func.isRequired,
  onDownload: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ShareIGGuide;
