import React from 'react';
import { arrayOf } from 'prop-types';
import shareButtonType from '@types/share-button-type';
import { Button, IconButton } from '@components/ui';
import Grid from './Grid';

const GridContainer = ({ buttonsData }) => {
  const buttonClass = 'c2-share-btn';
  const labelClass = 'c2-share-btn-label';

  // Create JSX buttons map
  const buttons = buttonsData.reduce((buttons, btnData) => {
    const { key, isIconButton, children, click } = btnData;

    const classes = {
      root: `${buttonClass} ${buttonClass}--${key}`,
      label: `${labelClass} ${labelClass}--${key}`,
    };

    const button = isIconButton ? (
      <IconButton
        variant="ghost"
        classes={classes}
        click={click}
      >
        {children}
      </IconButton>
    ) : (
      <Button
        variant="ghost"
        classes={classes}
        click={click}
      >
        {children}
      </Button>
    );

    return { ...buttons, [key]: button };
  }, {});

  return <Grid buttons={buttons} />;
};

GridContainer.propTypes = {
  buttonsData: arrayOf(shareButtonType).isRequired,
};

export default GridContainer;
