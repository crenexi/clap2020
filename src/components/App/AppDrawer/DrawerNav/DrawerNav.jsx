import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FaIcon from 'components/shared/FaIcon';
import './DrawerNav.scss';

const DrawerNav = ({ onClose }) => {
  const list = (
    <div
      role="presentation"
      onClick={onClose}
      onKeyDown={onClose}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <FaIcon icon="globe" />
          </ListItemIcon>
          <ListItemText primary="Hello World" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <FaIcon icon="globe" />
          </ListItemIcon>
          <ListItemText primary="Hello World" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {list}
    </div>
  );
};

DrawerNav.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default DrawerNav;
