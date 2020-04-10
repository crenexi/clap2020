import React from 'react';
import PropTypes, { arrayOf, shape } from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';

const NativeSelectControl = (props) => {
  const { classes, variant, label, helperText } = props;
  const { menu, value, change } = props;
  const name = label.replace(' ', '-').toLowerCase();
  const id = `${name}-native-label`;

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
        htmlFor={id}
      >
        {label}
      </InputLabel>
      <Select
        className={classes.select}
        native
        value={value}
        onChange={change}
        inputProps={{ id, name }}
        displayEmpty
      >
        <option aria-label="None" value="">- None -</option>
        {menu.sort().map((state) => {
          return <option key={state} value={state}>#{state}</option>;
        })}
      </Select>
      {helperText && (
        <FormHelperText style={styles.formHelperText}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

NativeSelectControl.propTypes = {
  menu: arrayOf(PropTypes.string).isRequired,
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

NativeSelectControl.defaultProps = {
  classes: {},
  variant: 'outlined',
  helperText: '',
};

export default NativeSelectControl;
