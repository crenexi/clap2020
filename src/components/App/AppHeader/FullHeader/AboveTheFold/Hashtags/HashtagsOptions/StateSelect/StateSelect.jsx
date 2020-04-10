import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import useBreakpoint from 'hooks/use-breakpoint';
import './StateSelect.scss';

const useStyles = makeStyles(() => ({
  formControl: {
    width: '100%',
  },
}));

const StateSelect = ({ menu, value, change }) => {
  const assetsPath = process.env.ASSETS_PATH;
  const isGtXs = useBreakpoint('gt-xs');
  const classes = useStyles();
  const label = 'State';
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
        <option aria-label="None" value="">None</option>
        {menu.sort().map((state) => {
          return <option key={state} value={state}>#{state}</option>;
        })}
      </Select>
    );
  } else {
    const menuItems = menu.sort().map((state) => {
      const thumbUrl = `${assetsPath}/states/flag-thumbs/${state}.png`;
      const thumbStyle = { backgroundImage: `url('${thumbUrl}')` };

      return (
        <MenuItem key={state} value={state}>
          <div styleName="state">
            <div styleName="state__thumb" style={thumbStyle} />
            #{state}
          </div>
        </MenuItem>
      );
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

StateSelect.propTypes = {
  menu: arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default StateSelect;
