import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import useBreakpoint from 'hooks/use-breakpoint';
import IconButton from 'components/shared/IconButton';
import './HashtagsDialog.scss';

const Transition = forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

const HashtagsDialog = (props) => {
  const { open, onClose, mainComponent, actionsComponent } = props;
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
          <IconButton variant="inverted" icon="times" click={onClose} />
        </div>
      </div>
      <DialogContent>
        {mainComponent}
      </DialogContent>
      <DialogActions>{actionsComponent}</DialogActions>
    </Dialog>
  );
};

HashtagsDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  mainComponent: PropTypes.element.isRequired,
  actionsComponent: PropTypes.element.isRequired,
};

export default HashtagsDialog;
