import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@components/ui';
import './CopyCard.scss';

const CopyCard = ({ children, overline, onCopy }) => (
  <div styleName="frame">
    <div styleName="card">
      <div styleName="overline">{overline}</div>
      <div styleName="main">
        <div styleName="main__content">{children}</div>
        <div styleName="main__action">
          <IconButton
            icon="copy"
            variant="secondary"
            click={onCopy}
          />
        </div>
      </div>
    </div>
  </div>
);

CopyCard.propTypes = {
  children: PropTypes.node.isRequired,
  overline: PropTypes.string.isRequired,
  onCopy: PropTypes.func.isRequired,
};

export default CopyCard;
