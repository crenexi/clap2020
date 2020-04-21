import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { SelectControl, NativeSelectControl } from 'components/forms';
import useBreakpoint from 'hooks/use-breakpoint';
import './StateSelect.scss';

const useStyles = makeStyles({
  formControl: {
    width: '100%',
  },
});

const StateSelect = (props) => {
  const helperText = 'Add state hashtag (optional)';

  const { menu, value, change } = props;
  const classes = useStyles();
  const assetsPath = process.env.ASSETS_PATH;
  const isGtXs = useBreakpoint('gt-xs');

  const handleChange = event => change(event.target.value);

  // List for native select
  const menuItemsXs = () => menu.sort().map(stateKey => ({
    value: stateKey,
    label: `#${stateKey}`,
  }));

  // List for normal select
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
    classes,
    helperText,
    label: 'State',
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

StateSelect.propTypes = {
  menu: arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default StateSelect;
