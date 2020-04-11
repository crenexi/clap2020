import React from 'react';
import shareButtonsType from 'types/share-buttons';
import Button from 'components/shared/Button';
import IconButton from 'components/shared/IconButton';
import ShareButtonsGridView from './ShareButtonsGridView';

const ShareButtonsGrid = ({ buttonsData }) => {
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

  return <ShareButtonsGridView buttons={buttons} />;
};

ShareButtonsGrid.propTypes = {
  buttonsData: shareButtonsType.isRequired,
};

export default ShareButtonsGrid;
