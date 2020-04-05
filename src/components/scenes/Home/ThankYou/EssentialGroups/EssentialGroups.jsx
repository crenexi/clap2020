import React from 'react';
import { arrayOf } from 'prop-types';
import essentialGroupType from 'types/essential-group';
import EssentialGroup from './EssentialGroup';
import './EssentialGroups.scss';

const EssentialGroups = ({ groups }) => {
  return (
    <div styleName="groups">
      {groups.map(group => <EssentialGroup group={group} />)}
    </div>
  );
};

EssentialGroups.propTypes = {
  groups: arrayOf(essentialGroupType).isRequired,
};

export default EssentialGroups;
