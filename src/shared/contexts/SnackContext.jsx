import React, { Fragment, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { AlertSnack } from 'components/ui';

const SnackContext = React.createContext(null);

export const SnackProvider = ({ children }) => {
  const snackQueueRef = useRef([]);

  // State
  const [snacking, setSnacking] = useState(false);
  const [snack, setSnack] = useState(undefined);

  const callNextSnack = () => {
    if (snackQueueRef.current.length > 0) {
      setSnack(snackQueueRef.current.shift());
      setSnacking(true);
    }
  };

  const pushSnack = (snack) => {
    const key = (new Date()).getTime();
    snackQueueRef.current.push({ ...snack, key });

    if (snacking) {
      setSnacking(false);
    } else {
      callNextSnack();
    }
  };

  // Signal the end of snacking
  const stopSnacking = (_, reason) => {
    if (reason === 'clickaway') return;
    setSnacking(false);
  };

  const providerValue = {
    pushSnack,
    stopSnacking,
  };

  return (
    <SnackContext.Provider value={providerValue}>
      <Fragment>
        {children}
        <AlertSnack
          snack={snack}
          open={snacking}
          onClose={stopSnacking}
          onExited={callNextSnack}
        />
      </Fragment>
    </SnackContext.Provider>
  );
};

SnackProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const SnackConsumer = SnackContext.Consumer;
export default SnackContext;
