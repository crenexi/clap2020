import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import NativeSelectControl from 'components/shared/forms/NativeSelectControl';
import SelectControl from 'components/shared/forms/SelectControl';
import useBreakpoint from 'hooks/use-breakpoint';
import './StateSelect.scss';

const useStyles = makeStyles(() => ({
  formControl: {
    width: '100%',
  },
}));

const StateSelect = (props) => {
  const { menu, value, change } = props;
  const assetsPath = process.env.ASSETS_PATH;
  const isGtXs = useBreakpoint('gt-xs');
  const classes = useStyles();

  const handleChange = event => change(event.target.value);

  const menuItemsGtXs = () => menu.sort().map((stateKey) => {
    const thumbUrl = `${assetsPath}/states/flag-thumbs/${stateKey}.png`;
    const thumbStyle = { backgroundImage: `url('${thumbUrl}')` };

    return {
      value: stateKey,
      children: (
        <div styleName="state">
          <div styleName="state__thumb" style={thumbStyle} />
          #{stateKey}
        </div>
      ),
    };
  });

  // Props in both native/fancy controls
  const controlProps = {
    value,
    label: 'State',
    helperText: 'Add state hashtag',
    className: classes.formControl,
    change: handleChange,
  };

  return (
    <div styleName="select-frame">
      { !isGtXs ? (
        <NativeSelectControl menu={menu} {...controlProps} />
      ) : (
        <SelectControl menu={menuItemsGtXs()} {...controlProps} />
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
