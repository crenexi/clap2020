import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import IconButton from 'components/shared/IconButton';
import './HashtagsDialog.scss';

const Transition = forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

const HashtagsDialog = ({ children, open, onClose }) => {
  return (
    <Dialog
      fullScreen
      open={open}
      TransitionComponent={Transition}
    >
      <div>
        <IconButton icon="times" click={onClose} />
      </div>
      <div>
        {children}
      </div>
    </Dialog>
  );
};

HashtagsDialog.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default HashtagsDialog;
