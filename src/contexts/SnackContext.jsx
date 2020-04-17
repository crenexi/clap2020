import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import AlertSnack from 'components/shared/AlertSnack';

const SnackContext = React.createContext(null);

export const SnackProvider = ({ children }) => {
  const zeroSnack = { message: '', variant: '' };

  // State
  const [snack, setSnack] = useState(zeroSnack);
  const [open, setOpen] = useState(false);

  // Open snack
  const startSnack = (snack) => {
    setSnack(snack);
    setOpen(true);
  };

  // End snack
  const endSnack = () => {
    setOpen(false);
  };

  const value = {
    startSnack,
    endSnack,
  };

  return (
    <SnackContext.Provider value={value}>
      <Fragment>
        {children}
        {open && (
          <AlertSnack
            variant={snack.variant}
            open={open}
            onClose={endSnack}
          >
            {snack.message}
          </AlertSnack>
        )}
      </Fragment>
    </SnackContext.Provider>
  );
};

SnackProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const SnackConsumer = SnackContext.Consumer;
export default SnackContext;
