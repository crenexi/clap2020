import React from 'react';
import PropTypes, { oneOf } from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '../Alert';

const AlertSnack = ({ children, open, onClose, variant }) => {
  const anchorOrigin = {
    vertical: 'top',
    horizontal: 'center',
  };

  return (
    <Snackbar
      open={open}
      anchorOrigin={anchorOrigin}
      autoHideDuration={33500}
      onClose={onClose}
    >
      <Alert
        canClose
        onClose={onClose}
        variant={variant}
      >
        {children}
      </Alert>
    </Snackbar>
  );
};

AlertSnack.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  variant: oneOf(['', 'success', 'danger']),
};

AlertSnack.defaultProps = {
  variant: '',
  onClose: () => {},
};

export default AlertSnack;
