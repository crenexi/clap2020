import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import './CitySelect.scss';

const useStyles = makeStyles(() => ({
  formControl: {
    width: '100%',
  },
}));

const CitySelect = ({ cities, value, change }) => {
  const label = 'City';
  const classes = useStyles();

  const menuItems = cities.sort().map((cityName) => {
    const cityKey = cityName.replace(/[\s.]/g, '');
    const cityTag = `#${cityKey}`;

    return (
      <MenuItem key={cityTag} value={cityTag}>{cityTag}</MenuItem>
    );
  });

  return (
    <div styleName="select">
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel className={classes.inputLabel}>{label}</InputLabel>
        <Select
          className={classes.select}
          value={value}
          onChange={e => change(e.target.value)}
          label={label}
        >
          <MenuItem value="">
            <div styleName="select__null-item">None</div>
          </MenuItem>
          {menuItems}
        </Select>
      </FormControl>
    </div>
  );
};

CitySelect.propTypes = {
  cities: arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default CitySelect;
