import React from 'react';
import { arrayOf } from 'prop-types';
import workforceGroupType from 'types/workforce-group';
import EssentialGroup from './EssentialGroup';
import './EssentialGroups.scss';

const EssentialGroups = ({ groups }) => {
  return (
    <div styleName="groups">
      <div>
        <div>Recognizing our</div>
        <h2>Essential Workers</h2>
      </div>
      {groups.map(group => (
        <EssentialGroup key={group.name} group={group} />
      ))}
    </div>
  );
};

EssentialGroups.propTypes = {
  groups: arrayOf(workforceGroupType).isRequired,
};

export default EssentialGroups;
