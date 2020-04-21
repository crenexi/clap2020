import React from 'react';
import MuiFAB from '@material-ui/core/Fab';
import useDrawer from '@hooks/use-drawer';
import FaIcon from '@components/shared/FaIcon';
import './DrawerFAB.scss';

const DrawerFAB = () => {
  const { toggleDrawer } = useDrawer();

  const muiFABClasses = (() => {
    const base = 'c2-fab';
    return {
      root: base,
      primary: `${base}--primary`,
      label: `${base}__label`,
    };
  })();

  return (
    <div styleName="fab-frame">
      <MuiFAB
        color="primary"
        classes={muiFABClasses}
        aria-label="Toggle Drawer"
        onClick={toggleDrawer}
      >
        <FaIcon icon="bars" />
      </MuiFAB>
    </div>
  );
};

export default DrawerFAB;
