import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import useContent from 'hooks/use-content';
import StateMenuItem from './StateMenuItem';
import './StateSelect.scss';

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: '100%',
  },
}));

const StateSelect = ({ value, change }) => {
  const classes = useStyles();
  const assetsPath = process.env.ASSETS_PATH;
  const { locations } = useContent();
  const { states } = locations;

  const menuItems = states.sort().map((state) => {
    const stateKey = state.replace(/[\s.]/g, '');
    const stateTag = `#${stateKey}`;
    const thumbUrl = `${assetsPath}/states/flag-thumbs/${stateKey}.png`;

    return (
      <MenuItem key={stateTag} value={stateTag}>
        <StateMenuItem stateTag={stateTag} thumbUrl={thumbUrl} />
      </MenuItem>
    );
  });

  return (
    <div styleName="select">
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel className={classes.inputLabel}>State</InputLabel>
        <Select
          className={classes.select}
          value={value}
          onChange={e => change(e.target.value)}
          label="State"
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
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default StateSelect;
