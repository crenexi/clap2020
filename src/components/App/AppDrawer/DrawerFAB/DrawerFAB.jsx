import React from 'react';
import PropTypes from 'prop-types';
import MuiFAB from '@material-ui/core/Fab';
import FaIcon from 'components/shared/FaIcon';
import './DrawerFAB.scss';

const DrawerFAB = ({ open, click }) => {
  const icon = open ? 'times' : 'bars';

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
        onClick={click}
      >
        <FaIcon icon={icon} />
      </MuiFAB>
    </div>
  );
};

DrawerFAB.propTypes = {
  open: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired,
};

export default DrawerFAB;
