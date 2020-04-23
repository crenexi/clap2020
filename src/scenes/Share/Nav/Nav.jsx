import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { arrayOf, shape } from 'prop-types';
import ButtonBase from '@material-ui/core/ButtonBase';
import { FaIcon } from '@components/ui';
import './Nav.scss';

const Nav = ({ items }) => (
  <div styleName="frame">
    <div styleName="nav">
      <div styleName="items">
        {items.map(({ to, label, icon, active }) => (
          <Link
            styleName={active ? 'item item--active' : 'item'}
            key={to}
            to={to}
          >
            <ButtonBase style={{ width: '100%', height: '100%' }}>
              <div styleName="item__btn-content">
                <div styleName="item__icon"><FaIcon icon={icon} /></div>
                <div styleName="item__label">{label}</div>
              </div>
            </ButtonBase>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

Nav.propTypes = {
  items: arrayOf(shape({
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    mobile: PropTypes.bool.isRequired,
  })).isRequired,
};

export default Nav;
