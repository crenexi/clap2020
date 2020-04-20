import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import NativeSelectControl from 'components/shared/@forms/NativeSelectControl';
import SelectControl from 'components/shared/@forms/SelectControl';
import useBreakpoint from 'hooks/use-breakpoint';
import './CitySelect.scss';

const useStyles = makeStyles({
  formControl: {
    width: '100%',
  },
});

const CitySelect = (props) => {
  const helperText = 'Add city hashtag (optional)';

  const { menu, value, change } = props;
  const classes = useStyles();
  const isGtXs = useBreakpoint('gt-xs');

  const handleChange = event => change(event.target.value);

  // List for native select
  const menuItemsXs = () => menu.sort().map(cityKey => ({
    value: cityKey,
    label: `#${cityKey}`,
  }));

  // List for normal select
  const menuItemsGtXs = () => menu.sort().map(cityKey => ({
    value: cityKey,
    children: `#${cityKey}`,
  }));

  // Props in both native/fancy controls
  const controlProps = {
    value,
    classes,
    helperText,
    label: 'City',
    change: handleChange,
  };

  return (
    <div styleName="select-frame">
      { !isGtXs ? (
        <NativeSelectControl menu={menuItemsXs()} {...controlProps} />
      ) : (
        <SelectControl menu={menuItemsGtXs()} {...controlProps} />
      )}
    </div>
  );
};

CitySelect.propTypes = {
  menu: arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default CitySelect;
