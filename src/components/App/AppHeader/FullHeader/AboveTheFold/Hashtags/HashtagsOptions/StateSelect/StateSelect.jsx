import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import NativeSelectControl from 'components/shared/forms/NativeSelectControl';
import useBreakpoint from 'hooks/use-breakpoint';
import './StateSelect.scss';

const useStyles = makeStyles(() => ({
  formControl: {
    width: '100%',
  },
}));

const StateSelect = ({ menu, value, change }) => {
  // const assetsPath = process.env.ASSETS_PATH;
  const isGtXs = useBreakpoint('gt-xs');
  const classes = useStyles();

  const handleChange = event => change(event.target.value);

  // &--null {
  //   color: rgba(0, 0, 0, .5);
  // }
  /*
    inputLabel = (
      <InputLabel className={classes.inputLabel} shrink>
        {name}
      </InputLabel>
    );

    // Menu Items for MUI
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

    // Select for MUI
    select = (
      <Select
        className={classes.select}
        value={value}
        onChange={handleChange}
        label={name}
      >
        <MenuItem value="">
          <div styleName="select__null-item">N/A</div>
        </MenuItem>
        {menuItems}
      </Select>
    );
  }
  */

  const controlProps = {
    menu,
    value,
    label: 'State',
    className: classes.formControl,
    change: handleChange,
  };

  return (
    <div styleName="select-frame">
      { !isGtXs ? (
        <NativeSelectControl {...controlProps} />
      ) : (
        <div>test</div>
      )}
    </div>
  );
};

StateSelect.propTypes = {
  menu: arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default StateSelect;
