import React from 'react';
import { arrayOf } from 'prop-types';
import workforceGroupType from 'types/workforce-group';
import BucketHeader from '../BucketHeader';
import BucketMain from '../BucketMain';
import EssentialGroup from './EssentialGroup';
import './EssentialGroups.scss';

const EssentialGroups = ({ groups }) => {
  return (
    <div styleName="groups">
      <BucketHeader preTitle="For handling daily" title="Essential Work" />
      <BucketMain>
        {groups.map(group => (
          <EssentialGroup key={group.name} group={group} />
        ))}
      </BucketMain>
    </div>
  );
};

EssentialGroups.propTypes = {
  groups: arrayOf(workforceGroupType).isRequired,
};

export default EssentialGroups;
