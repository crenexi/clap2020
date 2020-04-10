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

const CitySelect = ({ menu, value, change }) => {
  const isGtXs = useBreakpoint('gt-xs');
  const classes = useStyles();
  const label = 'City';
  let select = null;

  const handleChange = event => change(event.target.value);

  // Native select for xs
  if (!isGtXs) {
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
        {menu.sort().map((city) => {
          return <option key={city} value={city}>#{city}</option>;
        })}
      </Select>
    );
  } else {
    const menuItems = menu.sort().map((city) => {
      return <MenuItem key={city} value={city}>#{city}</MenuItem>;
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
  menu: arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default CitySelect;
