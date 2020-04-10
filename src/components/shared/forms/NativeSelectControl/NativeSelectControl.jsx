import React from 'react';
import PropTypes, { arrayOf, oneOfType } from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

const NativeSelectControl = (props) => {
  const { className, variant, label, menu, value, change } = props;
  const name = label.replace(' ', '-').toLowerCase();
  const id = `${name}-native-label`;

  return (
    <FormControl variant="outlined" className={className}>
      <InputLabel shrink htmlFor={id}>{label}</InputLabel>
      <Select
        native
        variant={variant}
        value={value}
        onChange={change}
        inputProps={{ id, name }}
      >
        <option aria-label="None" value="">- None -</option>
        {menu.sort().map((state) => {
          return <option key={state} value={state}>#{state}</option>;
        })}
      </Select>
    </FormControl>
  );
};

NativeSelectControl.propTypes = {
  menu: arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  className: oneOfType([PropTypes.string, PropTypes.object]),
  variant: PropTypes.string,
};

NativeSelectControl.defaultProps = {
  className: '',
  variant: 'outlined',
};

export default NativeSelectControl;
