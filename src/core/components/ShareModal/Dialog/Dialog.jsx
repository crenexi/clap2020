import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import useBreakpoint from '@hooks/use-breakpoint';
import { ShareEditor, ShareButtons } from '@components/campaign';
import { IconButton } from '@components/ui';
import './Dialog.scss';

const Transition = forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ShareDialog = (props) => {
  const { open, close, changePayload, sharePayload, copyPayload } = props;
  const isGtSm = useBreakpoint('gt-sm');

  return (
    <Dialog
      fullScreen={!isGtSm}
      fullWidth
      open={open}
      onClose={close}
      TransitionComponent={Transition}
    >
      <div styleName="header">
        <div styleName="header__title-group">
          <h3 styleName="header__title">Share Now</h3>
          <div styleName="header__subtitle">Get the hashtags/posters out!</div>
        </div>
        <div styleName="header__close">
          <IconButton icon="times" click={close} />
        </div>
      </div>
      <DialogContent>
        <ShareEditor changePayload={changePayload} />
      </DialogContent>
      <DialogActions>
        <div styleName="actions">
          <ShareButtons share={sharePayload} copy={copyPayload} />
        </div>
      </DialogActions>
    </Dialog>
  );
};

ShareDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  changePayload: PropTypes.func.isRequired,
  sharePayload: PropTypes.func.isRequired,
  copyPayload: PropTypes.func.isRequired,
};

export default ShareDialog;
