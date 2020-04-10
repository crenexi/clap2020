import React from 'react';
import PropTypes, { arrayOf, oneOfType, shape } from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import './SelectControl.scss';

const SelectControl = (props) => {
  const { classes, variant, label, helperText } = props;
  const { menu, value, change } = props;

  const styles = {
    formControl: {
      marginTop: '.35rem',
    },
    inputLabel: {
      backgroundColor: '#fff',
      padding: '0 3px',
    },
    formHelperText: {
      margin: '3px 0 0 0',
    },
  };

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
    <FormControl
      className={classes.formControl}
      style={styles.formControl}
      variant={variant}
    >
      <InputLabel
        className={classes.inputLabel}
        style={styles.inputLabel}
        shrink
      >
        {label}
      </InputLabel>
      <Select
        className={classes.select}
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
        <FormHelperText style={styles.formHelperText}>
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
      children: PropTypes.element,
    }),
  ])).isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  classes: shape({
    formControl: PropTypes.object,
    inputLabel: PropTypes.object,
    select: PropTypes.object,
  }),
  variant: PropTypes.string,
  helperText: PropTypes.string,
};

SelectControl.defaultProps = {
  classes: {},
  variant: 'outlined',
  helperText: '',
};

export default SelectControl;
