import React from 'react';
import { arrayOf } from 'prop-types';
import workforceGroupType from 'types/workforce-group';
import ThankYouHeader from './ThankYouHeader';
import FrontLineGroups from './FrontLineGroups';
import ResponseGroups from './ResponseGroups';
import EssentialGroups from './EssentialGroups';
import './ThankYouView.scss';

const ThankYouView = (props) => {
  const { frontLineGroups, responseGroups, essentialGroups } = props;

  return (
    <div styleName="thanks">
      <ThankYouHeader />
      <div styleName="thanks__main">
        <FrontLineGroups groups={frontLineGroups} />
        <ResponseGroups groups={responseGroups} />
        <EssentialGroups groups={essentialGroups} />
      </div>
    </div>
  );
};

ThankYouView.propTypes = {
  frontLineGroups: arrayOf(workforceGroupType).isRequired,
  responseGroups: arrayOf(workforceGroupType).isRequired,
  essentialGroups: arrayOf(workforceGroupType).isRequired,
};

export default ThankYouView;
