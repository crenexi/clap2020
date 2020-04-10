import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import useBreakpoint from 'hooks/use-breakpoint';
import './CitySelect.scss';

const useStyles = makeStyles(() => ({
  formControl: {
    width: '100%',
  },
}));

const CitySelect = ({ cities, value, change }) => {
  const isGtXs = useBreakpoint('gt-xs');
  const classes = useStyles();
  const label = 'City';
  let select = null;

  const handleChange = event => change(event.target.value);

  // Helper: keeps only alphabetical chars
  const onlyAlpha = str => str.match(/[A-Za-z]/g).join('');

  // Native select for xs
  if (!isGtXs) {
    const options = cities.sort().map((cityName) => {
      const cityTag = `#${onlyAlpha(cityName)}`;
      return <option key={cityTag} value={cityTag}>{cityTag}</option>;
    });

    select = (
      <Select
        native
        value={value}
        onChange={handleChange}
        inputProps={{
          name: label,
        }}
      >
        <option aria-label="None" value="" />
        {options}
      </Select>
    );
  } else {
    const menuItems = cities.sort().map((cityName) => {
      const cityTag = `#${onlyAlpha(cityName)}`;
      return <MenuItem key={cityTag} value={cityTag}>{cityTag}</MenuItem>;
    });

    select = (
      <Select
        className={classes.select}
        value={value}
        onChange={handleChange}
        label={label}
      >
        <MenuItem value="">
          <div styleName="select__null-item">None</div>
        </MenuItem>
        {menuItems}
      </Select>
    );
  }

  return (
    <div styleName="select">
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel className={classes.inputLabel}>{label}</InputLabel>
        {select}
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
