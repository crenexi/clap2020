import React from 'react';
import { arrayOf } from 'prop-types';
import workforceGroupType from 'types/workforce-group';
import BucketHeader from '../BucketHeader';
import BucketMain from '../BucketMain';
import ResponseGroup from './ResponseGroup';
import './ResponseGroups.scss';

const ResponseGroups = ({ groups }) => {
  return (
    <div styleName="groups">
      <BucketHeader preTitle="For commanding the" title="Global Response" />
      <BucketMain>
        {groups.map(group => (
          <ResponseGroup key={group.name} group={group} />
        ))}
      </BucketMain>
    </div>
  );
};

ResponseGroups.propTypes = {
  groups: arrayOf(workforceGroupType).isRequired,
};

export default ResponseGroups;
