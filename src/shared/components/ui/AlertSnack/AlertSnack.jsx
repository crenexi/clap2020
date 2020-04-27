import React from 'react';
import PropTypes, { shape, oneOf } from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '../Alert';

const AlertSnack = (props) => {
  const { snack, open, onClose, onExited } = props;

  const hideDuration = 3500;

  const anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'center',
  };

  return (
    <Snackbar
      key={snack.key}
      open={open}
      anchorOrigin={anchorOrigin}
      autoHideDuration={hideDuration}
      onClose={onClose}
      onExited={onExited}
    >
      <Alert
        canClose
        onClose={onClose}
        variant={snack.variant}
      >
        {snack.message}
      </Alert>
    </Snackbar>
  );
};

AlertSnack.propTypes = {
  snack: shape({
    key: PropTypes.number,
    variant: oneOf(['', 'success', 'danger']),
    message: PropTypes.string.isRequired,
  }),
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onExited: PropTypes.func.isRequired,
};

AlertSnack.defaultProps = {
  snack: {
    variant: '',
    message: '',
  },
};

export default AlertSnack;
