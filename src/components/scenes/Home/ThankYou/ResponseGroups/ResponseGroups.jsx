import React from 'react';
import { arrayOf } from 'prop-types';
import workforceGroupType from 'types/workforce-group';
import ResponseGroup from './ResponseGroup';
import './ResponseGroups.scss';

const ResponseGroups = ({ groups }) => {
  return (
    <div styleName="groups">
      {groups.map(group => (
        <ResponseGroup key={group.name} group={group} />
      ))}
    </div>
  );
};

ResponseGroups.propTypes = {
  groups: arrayOf(workforceGroupType).isRequired,
};

export default ResponseGroups;
