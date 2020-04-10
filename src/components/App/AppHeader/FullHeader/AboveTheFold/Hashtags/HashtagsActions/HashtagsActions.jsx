import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'components/shared/IconButton';
import './HashtagsActions.scss';

const HashtagsActions = ({ copyTags }) => {
  const copyButton = (
    <IconButton variant="primary" icon="copy" click={copyTags} />
  );

  return (
    <div styleName="actions">
      <div>{copyButton}</div>
    </div>
  );
};

HashtagsActions.propTypes = {
  copyTags: PropTypes.func.isRequired,
};

export default HashtagsActions;
