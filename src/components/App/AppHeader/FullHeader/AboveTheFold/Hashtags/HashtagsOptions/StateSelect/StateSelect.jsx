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

const StateSelect = ({ states, value, change }) => {
  const assetsPath = process.env.ASSETS_PATH;
  const isGtXs = useBreakpoint('gt-xs');
  const classes = useStyles();
  const label = 'State';
  let select = null;

  const handleChange = event => change(event.target.value);

  // Helper: keeps only alphabetical chars
  const onlyAlpha = str => str.match(/[A-Za-z]/g).join('');

  // Native select for xs
  if (!isGtXs) {
    const options = states.sort().map((stateName) => {
      const stateTag = `#${onlyAlpha(stateName)}`;
      return <option key={stateTag} value={stateTag}>{stateTag}</option>;
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
    const menuItems = states.sort().map((stateName) => {
      const stateKey = onlyAlpha(stateName);
      const stateTag = `#${stateKey}`;
      const thumbUrl = `${assetsPath}/states/flag-thumbs/${stateKey}.png`;
      const thumbStyle = { backgroundImage: `url('${thumbUrl}')` };

      return (
        <MenuItem key={stateTag} value={stateTag}>
          <div styleName="state">
            <div styleName="state__thumb" style={thumbStyle} />
            {stateTag}
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
  states: arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default StateSelect;
