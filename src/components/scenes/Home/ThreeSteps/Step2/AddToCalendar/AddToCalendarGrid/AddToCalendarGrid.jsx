import React from 'react';
import PropTypes, { arrayOf, shape } from 'prop-types';
import IconButton from 'components/shared/IconButton';
import FaIcon from 'components/shared/FaIcon';

const AddToCalendarGrid = (props) => {
  const { clients, onClientClick } = props;

  return (
    <div styleName="grid">
      {clients.map(({ id, name, faIcon }) => (
        <div styleName="item" key={id}>
          <div styleName="item__label">
            <FaIcon icon={faIcon} prefix="fab" />
            <span>{name}</span>
          </div>
          <div styleName="item__btn">
            <IconButton
              icon="calendar-plus"
              size="large"
              click={onClientClick}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

AddToCalendarGrid.propTypes = {
  clients: arrayOf(shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  onClientClick: PropTypes.string.isRequired,
};

export default AddToCalendarGrid;
