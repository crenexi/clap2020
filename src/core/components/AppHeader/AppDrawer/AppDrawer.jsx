import React, { Fragment } from 'react';
import Drawer from '@material-ui/core/Drawer';
import useDrawer from '@hooks/use-drawer';
import { IconButton } from '@components/ui';
import { BrandLogo, BrandNav, BrandContact } from '@components/brand';
import FAB from './FAB';
import Nav from './Nav';
import './AppDrawer.scss';

const AppDrawer = () => {
  const { drawerIsOpen, closeDrawer } = useDrawer();

  const drawerHeader = (
    <div styleName="header">
      <div
        styleName="brand"
        onClick={closeDrawer}
        onKeyDown={closeDrawer}
        role="button"
        tabIndex="0"
      >
        <BrandLogo variant="white" />
      </div>
      <div styleName="close">
        <IconButton
          variant="inverted"
          size="medium"
          icon="times"
          click={closeDrawer}
        />
      </div>
    </div>
  );

  const drawer = (
    <div styleName="drawer">
      {drawerHeader}
      <Nav />
      <div styleName="footer">
        <BrandNav />
        <div styleName="messenger">
          <BrandContact />
        </div>
      </div>
    </div>
  );

  return (
    <Fragment>
      <FAB />
      <Drawer
        anchor="left"
        open={drawerIsOpen}
        onClose={closeDrawer}
      >
        {drawer}
      </Drawer>
    </Fragment>
  );
};

export default AppDrawer;
