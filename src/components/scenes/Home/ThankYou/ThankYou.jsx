import React from 'react';
import useContent from 'hooks/use-content';
import ThankYouView from './ThankYouView';

const ThankYou = () => {
  const { essentialGroups: allGroups } = useContent();
  const frontLineGroups = [];
  const essentialGroups = [];

  allGroups.forEach((group) => {
    if (group.isFrontLine) {
      frontLineGroups.push(group);
      return;
    }

    essentialGroups.push(group);
  });

  return (
    <ThankYouView
      frontLineGroups={frontLineGroups}
      essentialGroups={essentialGroups}
    />
  );
};

export default ThankYou;
