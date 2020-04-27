import React from 'react';
import PropTypes from 'prop-types';
import logger from '@services/logger';
import copyService from '@services/copy-service';
import useSnack from '@hooks/use-snack';
import CopyCard from './CopyCard';

const CopyCardContainer = ({ children, overline, value }) => {
  const { pushSnack } = useSnack();

  const handleCopy = () => {
    copyService.copy(value)
      .then(() => pushSnack({
        variant: 'success',
        message: `Copied ${overline}`,
      }))
      .catch((err) => {
        logger.error(err);
        pushSnack({
          variant: 'error',
          message: 'Something went wrong',
        });
      });
  };

  return (
    <CopyCard overline={overline} onCopy={handleCopy}>{children}</CopyCard>
  );
};

CopyCardContainer.propTypes = {
  children: PropTypes.node.isRequired,
  overline: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default CopyCardContainer;
