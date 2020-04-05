import React from 'react';
import { arrayOf } from 'prop-types';
import essentialGroupTypes from 'types/essential-group';
import ThankYouHeader from './ThankYouHeader';
import FrontLineGroups from './FrontLineGroups';
import EssentialGroups from './EssentialGroups';
import './ThankYouView.scss';

const ThankYouView = (props) => {
  const { frontLineGroups, essentialGroups } = props;

  return (
    <div styleName="thanks">
      <ThankYouHeader />
      <FrontLineGroups groups={frontLineGroups} />
      <EssentialGroups groups={essentialGroups} />
    </div>
  );
};

ThankYouView.propTypes = {
  frontLineGroups: arrayOf(essentialGroupTypes).isRequired,
  essentialGroups: arrayOf(essentialGroupTypes).isRequired,
};

export default ThankYouView;
