import React from 'react';
import PropTypes, { oneOfType, arrayOf, shape } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import { combineClasses } from 'utils/helpers';

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
    '&:not(:first-child)': {
      marginTop: '3px',
    },
  },
});

const NativeSelectControl = (props) => {
  const { classes, variant, label, helperText } = props;
  const { menu, value, change } = props;

  const mergedClasses = combineClasses(useStyles(), classes);

  const name = label.replace(' ', '-').toLowerCase();
  const id = `${name}-native-label`;

  // First assemble MenuItems
  const menuItems = menu.map((item) => {
    // Handle string item
    if (typeof item === 'string') {
      return <option key={item} value={item}>{item}</option>;
    }

    // Handle object item
    const { value, label } = item;
    return <option key={value} value={value}>{label}</option>;
  });

  return (
    <FormControl className={mergedClasses.formControl} variant={variant}>
      <InputLabel
        className={mergedClasses.inputLabel}
        shrink
        htmlFor={id}
      >
        {label}
      </InputLabel>
      <Select
        className={mergedClasses.select}
        native
        value={value}
        onChange={change}
        inputProps={{ id, name }}
        displayEmpty
      >
        <option aria-label="None" value="">- None -</option>
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

NativeSelectControl.propTypes = {
  menu: arrayOf(oneOfType([
    PropTypes.string,
    shape({
      value: PropTypes.string,
      label: PropTypes.string,
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

NativeSelectControl.defaultProps = {
  classes: {},
  variant: 'outlined',
  helperText: '',
};

export default NativeSelectControl;
