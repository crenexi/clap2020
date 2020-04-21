import React from 'react';
import PropTypes, { arrayOf, oneOfType, shape } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import { combineClasses } from 'helpers';
import './SelectControl.scss';

const useStyles = makeStyles({
  formControl: {
    marginTop: '.35rem',
  },
  inputLabel: {
    backgroundColor: '#fff',
    padding: '0 3px',
  },
  formHelperText: {
    margin: '3px 0 0 0',
    color: 'rgba(0, 0, 0, .65)',
    '&:not(:first-child)': {
      marginTop: '3px',
    },
  },
});

const SelectControl = (props) => {
  const { classes, variant, label, helperText } = props;
  const { menu, value, change } = props;

  const mergedClasses = combineClasses(useStyles(), classes);

  // First assemble MenuItems
  const menuItems = menu.map((item) => {
    // Handle string item
    if (typeof item === 'string') {
      return <MenuItem key={item} value={item}>{item}</MenuItem>;
    }

    // Handle object item
    const { value, children } = item;
    return <MenuItem key={value} value={value}>{children}</MenuItem>;
  });

  // Build the FormControl
  return (
    <FormControl className={mergedClasses.formControl} variant={variant}>
      <InputLabel className={mergedClasses.inputLabel} shrink>{label}</InputLabel>
      <Select
        className={mergedClasses.select}
        value={value}
        onChange={change}
        label={label}
        displayEmpty
      >
        <MenuItem value="">
          <div styleName="item--null">- None -</div>
        </MenuItem>
        {menuItems}
      </Select>
      {helperText && (
        <FormHelperText className={mergedClasses.formHelperText}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

SelectControl.propTypes = {
  menu: arrayOf(oneOfType([
    PropTypes.string,
    shape({
      value: PropTypes.string,
      children: PropTypes.node,
    }),
  ])).isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  variant: PropTypes.string,
  helperText: PropTypes.string,
  classes: shape({
    formControl: PropTypes.string,
    inputLabel: PropTypes.string,
    select: PropTypes.string,
    formHelperText: PropTypes.string,
  }),
};

SelectControl.defaultProps = {
  classes: {},
  variant: 'outlined',
  helperText: '',
};

export default SelectControl;
