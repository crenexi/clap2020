import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import useContent from 'hooks/use-content';
import StateMenuItem from './StateMenuItem';
import './StateSelect.scss';

const StateSelect = ({ change }) => {
  const assetsPath = process.env.ASSETS_PATH;
  const { locations } = useContent();
  const { states } = locations;

  // State value
  const [value, setValue] = useState('NewYork');

  // Change handler
  const handleChange = (event) => {
    const value = event.target.value;

    setValue(value);
    change(value);
  };

  const menuItems = states.sort().map((state) => {
    const stateKey = state.replace(/[\s.]/g, '');
    const thumbUrl = `${assetsPath}/states/flag-thumbs/${stateKey}.png`;

    return (
      <MenuItem key={stateKey} value={stateKey}>
        <StateMenuItem stateKey={stateKey} thumbUrl={thumbUrl} />
      </MenuItem>
    );
  });

  return (
    <div styleName="select">
      <FormControl variant="outlined">
        <InputLabel>State</InputLabel>
        <Select
          value={value}
          onChange={handleChange}
          label="State"
        >
          <MenuItem value="">None</MenuItem>
          {menuItems}
        </Select>
      </FormControl>
    </div>
  );
};

StateSelect.propTypes = {
  change: PropTypes.func.isRequired,
};

export default StateSelect;
