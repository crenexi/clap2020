import React, { Fragment } from 'react';
import Drawer from '@material-ui/core/Drawer';
import useDrawer from 'hooks/use-drawer';
import BrandFav from 'components/shared/BrandFav';
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
        <BrandFav variant="main" />
      </div>
      <div styleName="drawer__close">
        <IconButton size="medium" icon="times" click={closeDrawer} />
      </div>
    </div>
  );

  const drawerContent = (
    <div styleName="drawer__content">
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
        {drawerHeader}
        {drawerContent}
      </Drawer>
    </Fragment>
  );
};

export default AppDrawer;
