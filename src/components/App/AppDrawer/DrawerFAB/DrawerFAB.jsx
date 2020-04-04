import React from 'react';
import PropTypes from 'prop-types';
import { Fab as MuiFAB } from '@material-ui/core/Fab';
import FaIcon from 'components/shared/FaIcon';
import './DrawerFAB.scss';

const DrawerFAB = ({ drawerIsOpen }) => {
  const icon = drawerIsOpen ? 'close' : 'menu';

  return (
    <div>
      <MuiFAB color="primary" aria-label="add">
        <FaIcon icon={icon} />
      </MuiFAB>
    </div>
  );
};

DrawerFAB.propTypes = {
  drawerIsOpen: PropTypes.bool.isRequired,
};

export default DrawerFAB;
