import React from 'react';
import PropTypes, { arrayOf, shape } from 'prop-types';
import Button from 'components/shared/Button';
import FaIcon from 'components/shared/FaIcon';
import './AddToCalendarGrid.scss';

const AddToCalendarGrid = (props) => {
  const { clients, onClientClick } = props;

  return (
    <div styleName="grid">
      {clients.map(({ id, name }) => (
        <div styleName={`item item--${id}`} key={id}>
          <div styleName="item__label">
            <FaIcon icon={id} prefix="fab" />
          </div>
          <div styleName="item__btn">
            <Button size="small" click={() => onClientClick(id)}>
              {name}
            </Button>
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
  onClientClick: PropTypes.func.isRequired,
};

export default AddToCalendarGrid;
