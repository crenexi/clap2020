import React from 'react';
import PropTypes from 'prop-types';
// import { IconButton } from '@components/ui';
import './CopyCard.scss';

const CopyCard = ({ children, onCopy }) => (
  <div styleName="card">{children}</div>
);

CopyCard.propTypes = {
  children: PropTypes.node.isRequired,
  onCopy: PropTypes.func.isRequired,
};

export default CopyCard;
