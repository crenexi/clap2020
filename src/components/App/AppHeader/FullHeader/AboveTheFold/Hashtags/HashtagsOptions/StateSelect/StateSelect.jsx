import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import './StateSelect.scss';

const useStyles = makeStyles(() => ({
  formControl: {
    width: '100%',
  },
}));

const StateSelect = ({ states, value, change }) => {
  const label = 'State';
  const classes = useStyles();
  const assetsPath = process.env.ASSETS_PATH;

  const menuItems = states.sort().map((stateName) => {
    const stateKey = stateName.replace(/[\s.]/g, '');
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

StateSelect.propTypes = {
  states: arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default StateSelect;
