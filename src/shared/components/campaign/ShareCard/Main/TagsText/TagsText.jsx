import React from 'react';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './TagsText.scss';

const TagsText = (props) => {
  const { value, hasAllTags, onHasAllTagsChange } = props;

  const hasAllTagsSwitch = (
    <FormControlLabel
      label="All Hashtags"
      control={(
        <Switch
          checked={hasAllTags}
          onChange={onHasAllTagsChange}
          name="hasAllTags"
        />
      )}
    />
  );

  return (
    <div styleName="frame">
      <div styleName="switch">{hasAllTagsSwitch}</div>
      <div styleName="value">{value}</div>
    </div>
  );
};

TagsText.propTypes = {
  value: PropTypes.string.isRequired,
  hasAllTags: PropTypes.bool.isRequired,
  onHasAllTagsChange: PropTypes.func.isRequired,
};

export default TagsText;
