import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import useBreakpoint from 'hooks/use-breakpoint';
import ShareEditor from 'components/shared/ShareEditor';
import ShareButtons from 'components/shared/ShareButtons';
import IconButton from 'components/shared/IconButton';
import './ShareDialog.scss';

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
      TransitionComponent={Transition}
    >
      <div styleName="header">
        <h2 styleName="header__title">Share Now</h2>
        <div styleName="header__close">
          <IconButton variant="inverted" icon="times" click={close} />
        </div>
      </div>
      <DialogContent>
        <ShareEditor changePayload={changePayload} />
      </DialogContent>
      <DialogActions>
        <ShareButtons share={sharePayload} copy={copyPayload} />
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
