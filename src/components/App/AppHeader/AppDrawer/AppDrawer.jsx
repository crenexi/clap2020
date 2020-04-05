import React, { Fragment } from 'react';
import Drawer from '@material-ui/core/Drawer';
import useDrawer from 'hooks/use-drawer';
import BrandLogo from 'components/shared/BrandLogo';
import IconButton from 'components/shared/IconButton';
import BrandSocialNav from 'components/shared/BrandSocialNav';
import DrawerFAB from './DrawerFAB';
import DrawerNav from './DrawerNav';
import './AppDrawer.scss';

const AppDrawer = () => {
  const { drawerIsOpen, closeDrawer } = useDrawer();

  const drawerHeader = (
    <div styleName="drawer__header">
      <div styleName="drawer__brand">
        <BrandLogo variant="white" />
      </div>
      <div styleName="drawer__close">
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
      <DrawerNav />
      <BrandSocialNav />
    </div>
  );

  return (
    <Fragment>
      <DrawerFAB />
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
