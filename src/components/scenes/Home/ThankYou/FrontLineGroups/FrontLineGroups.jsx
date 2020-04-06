import React from 'react';
import { arrayOf } from 'prop-types';
import workforceGroupType from 'types/workforce-group';
import BucketHeader from '../BucketHeader';
import BucketMain from '../BucketMain';
import FrontLineGroup from './FrontLineGroup';
import './FrontLineGroups.scss';

const FrontLineGroups = ({ groups }) => {
  return (
    <div styleName="groups">
      <BucketHeader preTitle="For battling on the" title="Front Lines" />
      <BucketMain>
        {groups.map(group => (
          <FrontLineGroup key={group.name} group={group} />
        ))}
      </BucketMain>
    </div>
  );
};

FrontLineGroups.propTypes = {
  groups: arrayOf(workforceGroupType).isRequired,
};

export default FrontLineGroups;
